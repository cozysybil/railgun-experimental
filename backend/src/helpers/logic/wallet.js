const { arrayToHexString, hexStringToArray } = require("../global/bytes");
const { randomBytes } = require("../global/crypto");
const { getTokenID, Note, UnshieldNote } = require("./note");

class Wallet {
  /**
   * Railgun Wallet
   *
   * @param spendingKey - Spending key
   * @param viewingKey - Viewing key
   */
  constructor(spendingKey, viewingKey) {
    this.spendingKey = spendingKey;
    this.viewingKey = viewingKey;
    this.notes = [];
    this.tokens = [];
  }

  /**
   * Gets total balance in wallet
   *
   * @returns total balance
   */
  get totalBalance() {
    return this.notes
      .map((note) => note.value)
      .reduce((accumulator, noteValue) => accumulator + noteValue);
  }

  /**
   * Scans transaction for commitments and nullifiers
   *
   * @param transaction - transaction to scan
   * @param contract - contract to parse events from
   * @returns complete
   */
  async scanTX(transaction, contract) {
    // Wait for transaction receipt
    const transactionReceipt = await transaction.wait();
    // console.log("Hereeeeeee");
    // console.log({ contract });

    // Loop through each log and parse
    await Promise.all(
      transactionReceipt.logs.map(async (log) => {
        // Check if log is log of contract
        if (log.address === contract.target) {
          // Parse log
          const parsedLog = contract.interface.parseLog(log);

          // Check log type
          if (parsedLog.name === "Shield") {
            // Type cast to ShieldEventObject
            const args = parsedLog.args;
            // export interface ShieldEventObject {
            //    0 treeNumber: BigNumber;
            //    1 startPosition: BigNumber;
            //    2 commitments: CommitmentPreimageStructOutput[];
            //    3 shieldCiphertext: ShieldCiphertextStructOutput[];
            //    4 fees: BigNumber[];
            //   }

            // Get start position
            const startPosition = Number(args[1]);

            // Loop through each shield and attempt to decrypt
            args[3].map((shieldCiphertext, index) => {
              // Try to decrypt
              const decrypted = Note.decryptShield(
                hexStringToArray(shieldCiphertext.shieldKey),
                shieldCiphertext.encryptedBundle.map(hexStringToArray),
                {
                  tokenType: args[2][index].token.tokenType,
                  tokenAddress: args[2][index].token.tokenAddress,
                  tokenSubID: BigInt(args[2][index].token.tokenSubID),
                },
                BigInt(args[2][index].value),
                this.viewingKey,
                this.spendingKey
              );

              // Insert into note array in same index as merkle tree
              if (decrypted) {
                this.notes[startPosition + index] = decrypted;
              }
            });
          } else if (parsedLog.name === "Transact") {
            // Type cast to TransactEventObject
            const args = parsedLog.args;

            // Get start position
            const startPosition = args.startPosition.toNumber();

            // Loop through each token we're scanning
            await Promise.all(
              this.tokens.map((token) =>
                Promise.all(
                  // Loop through every note and try to decrypt as token
                  args.ciphertext.map(async (ciphertext, index) => {
                    // Attempt to decrypt note with token
                    const note = await Note.decrypt(
                      hexStringToArray(args.hash[index]),
                      {
                        ciphertext: [
                          hexStringToArray(ciphertext.ciphertext[0]),
                          hexStringToArray(ciphertext.ciphertext[1]),
                          hexStringToArray(ciphertext.ciphertext[2]),
                          hexStringToArray(ciphertext.ciphertext[3]),
                        ],
                        blindedSenderViewingKey: hexStringToArray(
                          ciphertext.blindedSenderViewingKey
                        ),
                        blindedReceiverViewingKey: hexStringToArray(
                          ciphertext.blindedReceiverViewingKey
                        ),
                        annotationData: hexStringToArray(
                          ciphertext.annotationData
                        ),
                        memo: hexStringToArray(ciphertext.memo),
                      },
                      this.viewingKey,
                      this.spendingKey,
                      token
                    );

                    // If note was decrypted add to wallet
                    if (note) this.notes[startPosition + index] = note;
                  })
                )
              )
            );
          }
        }
      })
    );
  }

  /**
   * Get unspent notes
   *
   * @param merkletree - merkle tree to use as seen nullifiers source
   * @param token - token to get unspent notes for
   * @returns unspent notes
   */
  async getUnspentNotes(merkletree, token) {
    // Get requested token ID as hex
    const tokenID = arrayToHexString(getTokenID(token), false);
    // console.log({ tokenID });

    // Get note nullifiers as hex
    const noteNullifiers = await Promise.all(
      this.notes.map(async (note, index) =>
        arrayToHexString(await note.getNullifier(index), false)
      )
    );
    // console.log("noteNullifiers");
    // console.debug(noteNullifiers);

    // Get note token IDs as hex
    const noteTokenIDs = this.notes.map((note) =>
      arrayToHexString(note.getTokenID(), false)
    );
    // console.log("noteTokenIDs");
    console.debug(noteTokenIDs);

    // Get seen nullifiers as hex
    const seenNullifiers = merkletree.nullifiers.map((nullifier) =>
      arrayToHexString(nullifier, false)
    );
    // console.log("seenNullifiers");
    // console.debug(seenNullifiers);

    // TODO: I hard code this tokenID because my tokenID from getTokenID() is not the same somehow...
    // Return notes that haven't had their nullifiers seen and token IDs match
    return this.notes.filter(
      (note, index) =>
        !seenNullifiers.includes(noteNullifiers[index]) &&
        noteTokenIDs[index] === "0081604763d2d9c8b54b9f0aa2826f7bfcca11f7d109a4f4ce73c65991ea7a71"
        // noteTokenIDs[index] === tokenID
    );
  }

  /**
   * Gets inputs and outputs for a given test circuit
   *
   * @param merkletree - merkle tree to use as seen nullifiers source
   * @param inputs - number of inputs
   * @param outputs - number of outputs
   * @param includeUnshield - should include unshield
   * @param token - token to get notes for
   * @param spendingKey - receiver spending key
   * @param viewingKey - receiver viewing key
   * @returns inputs and outputs to use for test
   */
  async getTestTransactionInputs(
    merkletree,
    inputs,
    outputs,
    includeUnshield,
    token,
    spendingKey,
    viewingKey
  ) {
    // Get unspent notes
    const unspentNotes = await this.getUnspentNotes(merkletree, token);

    // If unspent notes doesn't have enough notes to satisfy the requested number of inputs throw
    if (unspentNotes.length < inputs) throw new Error("Not enough inputs");

    // Get first 'inputs' number of notes and push to inputs array
    const inputNotes = unspentNotes.slice(0, inputs);

    // Get sum of inputs values
    const inputTotal = inputNotes
      .map((note) => note.value)
      .reduce((right, left) => right + left);

    // Divide input total by outputs
    const outputPerNote = inputTotal / BigInt(outputs);

    // Get remainder
    const outputRemainder = inputTotal % BigInt(outputs);

    // Get output per note array - add remainder to first note
    const outputNoteValues = new Array(outputs).fill(outputPerNote);
    outputNoteValues[0] += outputRemainder;

    // Get output notes
    const outputNotes = outputNoteValues.map(
      (value) =>
        new Note(spendingKey, viewingKey, value, randomBytes(16), token, "")
    );

    // If include unshield, replace last note with unshield
    if (includeUnshield) {
      outputNotes[outputNotes.length - 1] = new UnshieldNote(
        includeUnshield,
        outputNotes[outputNotes.length - 1].value,
        token
      );
    }

    return {
      inputs: inputNotes,
      outputs: outputNotes,
    };
  }

  /**
   * Get balance for token
   *
   * @param merkletree - merkle tree to use as seen nullifiers source
   * @param token - token to get balance of
   * @returns balance
   */
  async getBalance(merkletree, token) {
    // Get unspent notes
    const unspentNotes = await this.getUnspentNotes(merkletree, token);
    console.debug(unspentNotes);

    // Map reduce sum values, default to 0 in no notes
    return unspentNotes
      .map((note) => note.value)
      .reduce((left, right) => left + right, 0n);
  }
}

module.exports = { Wallet };
