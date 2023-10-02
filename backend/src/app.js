const { ethers } = require("ethers");
const WalletSDK = require("@railgun-community/wallet");
const { RailgunEngine } = require("@railgun-community/engine");
const LevelDOWN = require("leveldown");
const {
  Artifact,
  assertArtifactExists,
  isDefined,
} = require("@railgun-community/shared-models");

const { MerkleTree } = require("./helpers/logic/merkletree");
const { Wallet } = require("./helpers/logic/wallet");
const { TokenType, Note } = require("./helpers/logic/note");
const {
  getFee,
  dummyTransact,
  UnshieldType,
} = require("./helpers/logic/transaction");
const { randomBytes } = require("./helpers/global/crypto");

const { railgunABI } = require("./abis/railgunAbi");
const { aaTokenABI } = require("./abis/aaTokenAbi");
const {
  encodeAddress,
  decodeAddress,
} = require("./helpers/railgunWallet/bech32");

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3010;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const testERC20 = {
  address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
  abi: aaTokenABI,
};
const railgunWalletStub = {
  address: "0x3aC005eCF84B510fd3Ff37133c1a641Cd79879b5",
  abi: railgunABI,
};
const deployerAndSnarkByPass = {
  publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
  privateKey:
    "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
};

const merkletreePromise = MerkleTree.createTree();
const wallet1 = new Wallet(randomBytes(32), randomBytes(32));
const wallet2 = new Wallet(randomBytes(32), randomBytes(32));

const tokenData = {
  tokenType: TokenType.ERC20,
  tokenAddress: testERC20.address,
  tokenSubID: 0n,
};
wallet1.tokens.push(tokenData);
wallet2.tokens.push(tokenData);

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
const snarkBypassSigner = new ethers.Wallet(
  deployerAndSnarkByPass.privateKey,
  provider
);
const railgunSmartWalletSnarkBypass = new ethers.Contract(
  railgunWalletStub.address,
  railgunWalletStub.abi,
  snarkBypassSigner
);

// Route to get wallet1
app.get("/getWallet1", (req, res) => {
  // Return wallet1 as JSON response
  const wallet1Data = {
    spendingKey: wallet1.spendingKey,
    viewingKey: wallet1.viewingKey,
  };

  const encoded = encodeAddress(wallet1Data);
  console.debug(encoded);
  res.json({
    spendingAddress: encoded.spendingAddress,
    viewingAddress: encoded.viewingAddress,
  });
});

app.get("/getWallet2", (req, res) => {
  const wallet2Data = {
    spendingKey: wallet2.spendingKey,
    viewingKey: wallet2.viewingKey,
  };

  const encoded = encodeAddress(wallet2Data);
  // Return wallet1 as JSON response
  res.json({
    spendingAddress: encoded.spendingAddress,
    viewingAddress: encoded.viewingAddress,
    //   viewingKey: wallet2.viewingKey,
  });
});

app.post("/shield/:amount", async (req, res) => {
  const merkletree = await merkletreePromise;

  const { amount } = req.params;
  //   const decoded = decodeAddress(addressPair);
  const shieldNotes = [
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits(amount, 18),
      randomBytes(16),
      tokenData,
      ""
    ),
  ];

  // shield notes
  const shieldTransaction = await railgunSmartWalletSnarkBypass.shield([
    ...(await Promise.all(shieldNotes.map((note) => note.encryptForShield()))),
  ]);
  console.debug(shieldTransaction);

  const totalShielded = shieldNotes
    .map((note) => note.value)
    .reduce((left, right) => left + right);

  // Calculate shield amounts
  const shieldAmounts = getFee(
    totalShielded,
    true,
    await railgunSmartWalletSnarkBypass.shieldFee()
  );
  console.debug(shieldAmounts);

  // Scan transaction
  await merkletree.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  await wallet1.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  await wallet2.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  //   console.debug(merkletree.tree);
  //   console.debug(wallet1.notes);
  //   console.debug(wallet2.notes);

  const wallet1Balance = await wallet1.getBalance(merkletree, tokenData);

  res.json({
    transactionHash: shieldTransaction.hash,
    newBalance: ethers.formatEther(wallet1Balance),
  });

  //   console.debug(await wallet1.getBalance(merkletree, tokenData));
  //   console.debug(await wallet2.getBalance(merkletree, tokenData));
});

// TODO: test
app.get("/scan", async (req, res) => {
  const merkletree = await merkletreePromise;
  const wallet1Balance = await wallet1.getBalance(merkletree, tokenData);
  const scanresult = ethers.formatEther(wallet1Balance)
  console.log("balance ", scanresult);
  res.json({
    newBalance: ethers.formatEther(wallet1Balance),
  });
});

app.get("/mockscan", async (req, res) => {
  res.json({
    newBalance: "9.96",
  });
});

app.post("/mockshield/:amount", async (req, res) => {
  res.json({
    newBalance: "9.96",
    transactionHash:
      "0xa47c2d65ae630a599dc429be4b671d91e03d31f65a17ee96ff3d316705268bee",
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(
    `Express server is running on port ${port}\nAlways re-deploy contract before start the server`
  );
});

const start = async () => {
  ////////// setup //////////
  const testERC20 = {
    address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
    abi: aaTokenABI,
  };
  const railgunWalletStub = {
    address: "0x95316A83B4Ac1bC7185105C628607083c895810b",
    abi: railgunABI,
  };
  const deployerAndSnarkByPass = {
    publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
    privateKey:
      "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
  };
  const wallet1AsMine = {
    publicKey: "0x4B71804d520d200D90085925B1B207329da859A3",
    privateKey:
      "0x6f587b818eee7882908c484b193773c22d32a926f9e82fd2c8000776a7eb4123",
  };
  const wallet2AsBob = {
    publicKey: "0xC0e64f24BBe5bdfE5e494f5ac188315e1022659b",
    privateKey:
      "0xa23971258806bcf66b6a037ec43326745c06c4ccdb57fba3c40f38f1ecba1a23",
  };
  const merkletree = await MerkleTree.createTree();
  // create new wallet see: Railgun-Community/engine/src/wallet/railgun-wallet.ts
  // derive key from mnemonic -> seed -> specific_path
  //   export type SpendingPublicKey = [bigint, bigint];
  //   export type SpendingKeyPair = { privateKey: Uint8Array; pubkey: SpendingPublicKey };
  //   export type ViewingKeyPair = { privateKey: Uint8Array; pubkey: Uint8Array };
  const wallet1 = new Wallet(randomBytes(32), randomBytes(32));
  const wallet2 = new Wallet(randomBytes(32), randomBytes(32));
  const wallet1Data = {
    spendingKey: wallet1.spendingKey,
    viewingKey: wallet1.viewingKey,
  };
  const wallet2Data = {
    spendingKey: wallet2.spendingKey,
    viewingKey: wallet2.viewingKey,
  };
  console.debug(wallet1Data);
  console.debug(wallet2Data);
  // encode - decode address
  //   const addressData1 = {
  //     spendingKey: wallet1.spendingKey,
  //     viewingKey: wallet1.viewingKey,
  //   };
  //   console.log(wallet1.spendingKey);
  //   console.log(wallet1.viewingKey);
  //   const encoded = encodeAddress(addressData1);
  //   console.debug(encoded);
  //   const decoded = decodeAddress(encoded);
  //   console.debug(decoded);
  const tokenData = {
    tokenType: TokenType.ERC20,
    tokenAddress: testERC20.address,
    tokenSubID: 0n,
  };
  wallet1.tokens.push(tokenData);
  wallet2.tokens.push(tokenData);

  // connect to rpc
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
  const snarkBypassSigner = new ethers.Wallet(
    deployerAndSnarkByPass.privateKey,
    provider
  );
  const aaContractSnarkBypassSigner = new ethers.Contract(
    testERC20.address,
    testERC20.abi,
    snarkBypassSigner
  );
  const railgunSmartWalletSnarkBypass = new ethers.Contract(
    railgunWalletStub.address,
    railgunWalletStub.abi,
    snarkBypassSigner
  );

  ////////// Shield notes //////////
  const shieldNotes = [
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits("1", 18),
      randomBytes(16),
      tokenData,
      ""
    ),
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits("1", 18),
      randomBytes(16),
      tokenData,
      ""
    ),
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits("1", 18),
      randomBytes(16),
      tokenData,
      ""
    ),
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits("1", 18),
      randomBytes(16),
      tokenData,
      ""
    ),
    new Note(
      wallet1.spendingKey,
      wallet1.viewingKey,
      ethers.parseUnits("1", 18),
      randomBytes(16),
      tokenData,
      ""
    ),
  ];
  //   console.debug(shieldNotes);
  // snarkBypass approve for 'railgunWalletStub'
  const recieptOfsnarkBypassApproval =
    await aaContractSnarkBypassSigner.approve(
      railgunWalletStub.address,
      ethers.parseUnits("20", 18)
    );
  console.debug(recieptOfsnarkBypassApproval);
  // shield notes
  const shieldTransaction = await railgunSmartWalletSnarkBypass.shield([
    ...(await Promise.all(shieldNotes.map((note) => note.encryptForShield()))),
  ]);
  console.debug(shieldTransaction);
  const treasuryBalance1 = await aaContractSnarkBypassSigner.balanceOf(
    railgunWalletStub.address
  );
  console.log("Treasury Balance:", ethers.formatUnits(treasuryBalance1, 18));

  const totalShielded = shieldNotes
    .map((note) => note.value)
    .reduce((left, right) => left + right);

  // Calculate shield amounts
  const shieldAmounts = getFee(
    totalShielded,
    true,
    await railgunSmartWalletSnarkBypass.shieldFee()
  );
  console.debug(shieldAmounts);

  // Scan transaction
  await merkletree.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  await wallet1.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  await wallet2.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
  //   console.debug(merkletree.tree);
  //   console.debug(wallet1.notes);
  //   console.debug(wallet2.notes);

  console.debug(await wallet1.getBalance(merkletree, tokenData));
  console.debug(await wallet2.getBalance(merkletree, tokenData));

  ////////// Transfer shielded notes //////////
  // Transfer tokens between shielded balances
  const chainID = BigInt(await provider.send("eth_chainId", []));
  //   const transferNotes = await wallet1.getTestTransactionInputs(
  //     merkletree,
  //     2,
  //     3,
  //     false,
  //     tokenData,
  //     wallet2.spendingKey,
  //     wallet2.viewingKey
  //   );

  //   const dummyTransactions = await dummyTransact(
  //     merkletree,
  //     0n,
  //     UnshieldType.NONE,
  //     chainID,
  //     ethers.ZeroAddress,
  //     new Uint8Array(32),
  //     transferNotes.inputs,
  //     transferNotes.outputs
  //   );
  //   console.log("dummyTransaction");
  //   console.debug(dummyTransactions);

  //   const transferTransaction = await railgunSmartWalletSnarkBypass.transact([
  //     dummyTransactions,
  //   ]);
  //   console.debug(transferTransaction);

  //   // Calculate total transferred
  //   const totalTransferred = transferNotes.outputs
  //     .map((note) => note.value)
  //     .reduce((left, right) => left + right);
  //   console.debug(totalTransferred);

  //   // Scan transaction
  //   await merkletree.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);
  //   await wallet1.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);
  //   await wallet2.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);

  //   console.debug(await wallet1.getBalance(merkletree, tokenData));
  //   console.debug(await wallet2.getBalance(merkletree, tokenData));

  ////////// Unshield notes //////////
  //   const unshieldNotes = await wallet1.getTestTransactionInputs(
  //     merkletree,
  //     2,
  //     3,
  //     wallet1AsMine.publicKey,
  //     tokenData,
  //     wallet1.spendingKey,
  //     wallet1.viewingKey
  //   );
  //   const unshieldTransaction = await railgunSmartWalletSnarkBypass.transact([
  //     await dummyTransact(
  //       merkletree,
  //       0n,
  //       UnshieldType.NORMAL,
  //       chainID,
  //       ethers.ZeroAddress,
  //       new Uint8Array(32),
  //       unshieldNotes.inputs,
  //       unshieldNotes.outputs
  //     ),
  //   ]);
  //   console.debug(unshieldTransaction);

  //   // Get total unshielded
  //   const totalUnshielded =
  //     unshieldNotes.outputs[unshieldNotes.outputs.length - 1].value;

  //   // Calculate unshield amount
  //   const unshieldAmounts = getFee(
  //     totalUnshielded,
  //     true,
  //     (await railgunSmartWalletSnarkBypass.unshieldFee()).toBigInt()
  //   );
  //   console.debug(unshieldAmounts);

  //   // Scan transaction
  //   await merkletree.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);
  //   await wallet1.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);
  //   await wallet2.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);

  //   console.debug(await wallet1.getBalance(merkletree, tokenData));
  //   console.debug(await wallet2.getBalance(merkletree, tokenData));
};

// start();

const test = async () => {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
  console.debug(BigInt(await provider.send("eth_chainId", [])));
  // const chainID = toString(BigInt(await provider.send("eth_chainId", [])));
};

// test()

const scan = async () => {
  ////////// setup //////////
  const testERC20 = {
    address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
    abi: aaTokenABI,
  };

  const railgunWalletStub = {
    address: "0x381F42760948581589C0e4e862dB2e0865e2C699",
    abi: railgunABI,
  };

  const deployerAndSnarkByPass = {
    publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
    privateKey:
      "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
  };

  const wallet1AsMine = {
    publicKey: "0x4B71804d520d200D90085925B1B207329da859A3",
    privateKey:
      "0x6f587b818eee7882908c484b193773c22d32a926f9e82fd2c8000776a7eb4123",
  };
  const wallet2AsBob = {
    publicKey: "0xC0e64f24BBe5bdfE5e494f5ac188315e1022659b",
    privateKey:
      "0xa23971258806bcf66b6a037ec43326745c06c4ccdb57fba3c40f38f1ecba1a23",
  };

  // contract balance
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
  const snarkBypassSigner = new ethers.Wallet(
    deployerAndSnarkByPass.privateKey,
    provider
  );
  const aaContractSnarkBypassSigner = new ethers.Contract(
    testERC20.address,
    testERC20.abi,
    snarkBypassSigner
  );
  const balance = await aaContractSnarkBypassSigner.balanceOf(
    railgunWalletStub.address
  );
  console.log("Balance:", ethers.formatUnits(balance, 18));
};

// scan();
