const {
  bigIntToArray,
  hexStringToArray,
  arrayToByteLength,
  combine,
  padToLength,
  railgunBase37,
  arrayToBigInt,
  arrayToHexString,
} = require("../global/bytes");
const { SNARK_SCALAR_FIELD } = require("../global/constants");
const {
  hash,
  edBabyJubJub,
  aes,
  ed25519,
  randomBytes,
} = require("../global/crypto");

const { TextEncoder, TextDecoder } = require("util");

const TokenType = {
  ERC20: 0,
  ERC721: 1,
  ERC1155: 2,
};

// export interface TokenData {
//   tokenType: TokenType;
//   tokenAddress: string;
//   tokenSubID: bigint;
// }

// export interface CommitmentCiphertext {
//   ciphertext: [Uint8Array, Uint8Array, Uint8Array, Uint8Array];
//   blindedSenderViewingKey: Uint8Array;
//   blindedReceiverViewingKey: Uint8Array;
//   annotationData: Uint8Array;
//   memo: Uint8Array;
// }

// export interface ShieldCiphertext {
//   // IV shared (16 bytes), tag (16 bytes), random (16 bytes), IV sender (16 bytes), receiver viewing public key (32 bytes)
//   encryptedBundle: [Uint8Array, Uint8Array, Uint8Array];
//   shieldKey: Uint8Array;
// }

// export interface CommitmentPreimage {
//   npk: Uint8Array;
//   token: TokenData;
//   value: bigint;
// }

// export interface ShieldRequest {
//   preimage: CommitmentPreimage;
//   ciphertext: ShieldCiphertext;
// }

/**
 * Gets token ID from token data
 *
 * @param tokenData - token data to get ID from
 * @returns token ID
 */
function getTokenID(tokenData) {
  // ERC20 tokenID is just the address
  if (tokenData.tokenType === TokenType.ERC20) {
    return arrayToByteLength(hexStringToArray(tokenData.tokenAddress), 32);
  }

  // Other token types are the keccak256 hash of the token data
  return bigIntToArray(
    arrayToBigInt(
      hash.keccak256(
        combine([
          bigIntToArray(BigInt(tokenData.tokenType), 32),
          padToLength(hexStringToArray(tokenData.tokenAddress), 32, "left"),
          bigIntToArray(tokenData.tokenSubID, 32),
        ])
      )
    ) % SNARK_SCALAR_FIELD,
    32
  );
}

/**
 * Validate Token Data
 *
 * @param tokenData - token data to validate
 * @returns validity
 */
function validateTokenData(tokenData) {
  if (!Object.values(TokenType).includes(tokenData.tokenType)) return false;
  if (!/^0x[a-fA-F0-9]{40}$/.test(tokenData.tokenAddress)) return false;
  if (0n > tokenData.tokenSubID || tokenData.tokenSubID >= 2n ** 256n)
    return false;

  return true;
}

class Note {
  /**
   * Railgun Note
   *
   * @param spendingKey - spending private key
   * @param viewingKey - viewing key
   * @param value - note value
   * @param random - note random field
   * @param tokenData - note token data
   * @param memo - note memo
   */

  constructor(spendingKey, viewingKey, value, random, tokenData, memo) {
    if (spendingKey.length !== 32) throw Error("Invalid spending key length");
    if (viewingKey.length !== 32) throw Error("Invalid viewing key length");
    if (value > 2n ** 128n - 1n) throw Error("Value too high");
    if (random.length !== 16) throw Error("Invalid random length");

    this.spendingKey = spendingKey;
    this.viewingKey = viewingKey;
    this.value = value;
    this.random = random;
    this.tokenData = tokenData;
    this.memo = memo;
  }

  /**
   * Get note nullifying key
   *
   * @returns nullifying key
   */
  async getNullifyingKey() {
    return hash.poseidon([this.viewingKey]);
  }
  /**
   * Get note spending public key
   *
   * @returns spending public key
   */
  async getSpendingPublicKey() {
    return edBabyJubJub.privateKeyToPublicKey(this.spendingKey);
  }

  /**
   * Get note viewing public key
   *
   * @returns viewing public key
   */
  async getViewingPublicKey() {
    return ed25519.privateKeyToPublicKey(this.viewingKey);
  }

  /**
   * Get note master public key
   *
   * @returns master public key
   */
  async getMasterPublicKey() {
    return hash.poseidon([
      ...(await this.getSpendingPublicKey()),
      await this.getNullifyingKey(),
    ]);
  }

  /**
   * Get note public key
   *
   * @returns note public key
   */
  async getNotePublicKey() {
    return hash.poseidon([
      await this.getMasterPublicKey(),
      arrayToByteLength(this.random, 32),
    ]);
  }

  /**
   * Gets token ID from token data
   *
   * @returns token ID
   */
  getTokenID() {
    return getTokenID(this.tokenData);
  }

  /**
   * Get note hash
   *
   * @returns hash
   */
  async getHash() {
    return hash.poseidon([
      await this.getNotePublicKey(),
      this.getTokenID(),
      bigIntToArray(this.value, 32),
    ]);
  }

  /**
   * Calculate nullifier
   *
   * @param leafIndex - leaf index of note
   * @returns nullifier
   */
  async getNullifier(leafIndex) {
    return hash.poseidon([
      await this.getNullifyingKey(),
      bigIntToArray(BigInt(leafIndex), 32),
    ]);
  }

  /**
   * Sign a transaction
   *
   * @param merkleRoot - transaction merkle root
   * @param boundParamsHash - transaction bound parameters hash
   * @param nullifiers - transaction nullifiers
   * @param commitmentsOut - transaction commitments
   * @returns signature
   */
  async sign(merkleRoot, boundParamsHash, nullifiers, commitmentsOut) {
    const sighash = await hash.poseidon([
      merkleRoot,
      boundParamsHash,
      ...nullifiers,
      ...commitmentsOut,
    ]);

    const key = this.spendingKey;

    return edBabyJubJub.signPoseidon(key, sighash);
  }

  /**
   * Gets commitment preimage
   *
   * @returns Commitment preimage
   */
  async getCommitmentPreimage() {
    return {
      npk: await this.getNotePublicKey(),
      token: this.tokenData,
      value: this.value,
    };
  }

  /**
   * Encrypts random value for shield
   *
   * @returns encrypted random bundle
   */
  async encryptForShield() {
    // Generate a random key for testing
    // In the case of shielding from regular ETH address key should be generated as hash256(eth_sign(some_fixed_message))) from the ETH address of the shielder
    // In the case of shielding from a smart contract (eg. adapt module) a random 32 byte value should be used
    const shieldPrivateKey = randomBytes(32);

    // Get shared key
    const sharedKey = ed25519.getSharedKey(
      shieldPrivateKey,
      await this.getViewingPublicKey()
    );

    // Encrypt random
    const encryptedRandom = aes.gcm.encrypt([this.random], sharedKey);

    // Encrypt receiver public key
    const encryptedReceiver = aes.ctr.encrypt(
      [await this.getViewingPublicKey()],
      shieldPrivateKey
    );

    // Construct ciphertext
    const ciphertext = {
      encryptedBundle: [
        encryptedRandom[0],
        combine([encryptedRandom[1], encryptedReceiver[0]]),
        encryptedReceiver[1],
      ],
      shieldKey: await ed25519.privateKeyToPublicKey(shieldPrivateKey),
    };

    // Return shield request
    return {
      ciphertext,
      preimage: await this.getCommitmentPreimage(),
    };
  }

  /**
   * Generates encrypted commitment bundle
   *
   * @param senderViewingPrivateKey - sender's viewing private key
   * @param blind - blind sender from receiver
   * @returns Ciphertext
   */
  async encrypt(senderViewingPrivateKey, blind) {
    // For contract tests always use output type of 0
    const outputType = 0n;

    // For contract tests always use this fixed application identifier
    const applicationIdentifier = railgunBase37.encode("railgun tests");

    // Get sender public key
    const senderViewingPublicKey = await ed25519.privateKeyToPublicKey(
      senderViewingPrivateKey
    );

    // Get sender random, set to 0 is not blinding
    const senderRandom = blind ? randomBytes(15) : new Uint8Array(15);

    // Blind keys
    const blindedKeys = ed25519.railgunKeyExchange.blindKeys(
      senderViewingPublicKey,
      await this.getViewingPublicKey(),
      this.random,
      senderRandom
    );

    // Get shared key
    const sharedKey = ed25519.getSharedKey(
      senderViewingPrivateKey,
      blindedKeys.blindedReceiverPublicKey
    );

    // Encode memo text
    const memo = new TextEncoder().encode(this.memo);

    // Encrypt shared ciphertext
    const encryptedSharedBundle = aes.gcm.encrypt(
      [
        await this.getMasterPublicKey(),
        combine([this.random, bigIntToArray(this.value, 16)]),
        this.getTokenID(),
        memo,
      ],
      sharedKey
    );

    // Encrypt sender ciphertext
    const encryptedSenderBundle = aes.ctr.encrypt(
      [
        combine([
          bigIntToArray(outputType, 1),
          senderRandom,
          applicationIdentifier,
        ]),
      ],
      senderViewingPrivateKey
    );

    // Return formatted commitment bundle
    return {
      ciphertext: [
        encryptedSharedBundle[0],
        encryptedSharedBundle[1],
        encryptedSharedBundle[2],
        encryptedSharedBundle[3],
      ],
      blindedSenderViewingKey: blindedKeys.blindedSenderPublicKey,
      blindedReceiverViewingKey: blindedKeys.blindedReceiverPublicKey,
      annotationData: combine(encryptedSenderBundle),
      memo: encryptedSharedBundle[4],
    };
  }

  /**
   * Decrypts shielded note
   *
   * @param shieldKey - ephemeral key to us ein decryption
   * @param encryptedBundle - encrypted bundle to decrypt
   * @param token - token data
   * @param value - note value
   * @param viewingKey - viewing private key to try decrypting for
   * @param spendingKey - spending private key to use in decrypted note
   * @returns decrypted note or undefined if decryption failed
   */
  static decryptShield(
    shieldKey,
    encryptedBundle,
    token,
    value,
    viewingKey,
    spendingKey
  ) {
    // Try to decrypt encrypted random
    try {
      // Get shared key
      const sharedKey = ed25519.getSharedKey(viewingKey, shieldKey);

      // Decrypt random
      const random = aes.gcm.decrypt(
        [encryptedBundle[0], encryptedBundle[1].slice(0, 16)],
        sharedKey
      )[0];

      // Construct note
      const note = new Note(spendingKey, viewingKey, value, random, token, "");

      return note;
    } catch {
      return undefined;
    }
  }

  /**
   * Decrypts note from encrypted bundle
   *
   * @param expectedHash - expected hash of note
   * @param encrypted - encrypted commitment bundle
   * @param viewingKey - viewing private key to try decrypting for
   * @param spendingKey - spending private key to use in decrypted note
   * @param tokenData - token data to use in decrypted note
   * @returns decrypted note or undefined if decryption failed,
   * spender key doesn't match, or token data doesn't match
   */
  static async decrypt(
    expectedHash,
    encrypted,
    viewingKey,
    spendingKey,
    tokenData
  ) {
    // Reconstruct encrypted shared bundle
    const encryptedSharedBundle = [...encrypted.ciphertext, encrypted.memo];

    let sharedBundle;

    // Try to decrypt encrypted shared bundle
    try {
      // Get shared key
      const sharedKey = ed25519.getSharedKey(
        viewingKey,
        encrypted.blindedSenderViewingKey
      );

      // Decrypt
      sharedBundle = aes.gcm.decrypt(encryptedSharedBundle, sharedKey);
    } catch {
      return undefined;
    }

    // Decode memo
    const memo =
      sharedBundle.length > 3 ? new TextDecoder().decode(sharedBundle[3]) : "";

    // Construct note
    const note = new Note(
      spendingKey,
      viewingKey,
      arrayToBigInt(sharedBundle[1].slice(16, 32)),
      sharedBundle[1].slice(0, 16),
      tokenData,
      memo.replace(/\u0000/g, "")
    );

    // If hash matches return note
    if (
      arrayToHexString(await note.getHash(), false) ===
      arrayToHexString(expectedHash, false)
    )
      return note;

    // Return undefined if hash doesn't match
    return undefined;
  }
}

class UnshieldNote {
  /**
   * Railgun Unshield
   *
   * @param unshieldAddress - address to unshield to
   * @param value - note value
   * @param tokenData - note token data
   */
  constructor(unshieldAddress, value, tokenData) {
    // Validate bounds
    if (!/^0x[a-fA-F0-9]{40}$/.test(unshieldAddress))
      throw Error("Invalid unshield address");
    if (value >= 2n ** 128n) throw Error("Value too high");
    if (!validateTokenData(tokenData)) throw Error("Invalid token data");

    this.unshieldAddress = unshieldAddress;
    this.value = value;
    this.tokenData = tokenData;
  }

  /**
   * Return unshield address as npk
   *
   * @returns npk
   */
  getNotePublicKey() {
    return arrayToByteLength(hexStringToArray(this.unshieldAddress), 32);
  }

  /**
   * Gets token ID from token data
   *
   * @returns token ID
   */
  getTokenID() {
    return getTokenID(this.tokenData);
  }

  /**
   * Get note hash
   *
   * @returns hash
   */
  async getHash() {
    return hash.poseidon([
      this.getNotePublicKey(),
      this.getTokenID(),
      bigIntToArray(this.value, 32),
    ]);
  }

  /**
   * Gets commitment preimage
   *
   * @returns Commitment preimage
   */
  getCommitmentPreimage() {
    return {
      npk: this.getNotePublicKey(),
      token: this.tokenData,
      value: this.value,
    };
  }

  /**
   * Return dummy ciphertext
   *
   * @returns Dummy ciphertext
   */
  encrypt() {
    return {
      ciphertext: [
        new Uint8Array(32),
        new Uint8Array(32),
        new Uint8Array(32),
        new Uint8Array(32),
      ],
      blindedSenderViewingKey: new Uint8Array(32),
      blindedReceiverViewingKey: new Uint8Array(32),
      annotationData: new Uint8Array(0),
      memo: new Uint8Array(0),
    };
  }
}

module.exports = { getTokenID, validateTokenData, Note, UnshieldNote, TokenType };
