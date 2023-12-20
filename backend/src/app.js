// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

// Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
// Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

// Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
// Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

// Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
// Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

// Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
// Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

// Account #5: 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000 ETH)
// Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

// Account #6: 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000 ETH)
// Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

// Account #7: 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000 ETH)
// Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

// Account #8: 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000 ETH)
// Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

// Account #9: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000 ETH)
// Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

// Account #10: 0xBcd4042DE499D14e55001CcbB24a551F3b954096 (10000 ETH)
// Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

// Account #11: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788 (10000 ETH)
// Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

// Account #12: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a (10000 ETH)
// Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

// Account #13: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec (10000 ETH)
// Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

// Account #14: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097 (10000 ETH)
// Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

// Account #15: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 (10000 ETH)
// Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

// Account #16: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30 (10000 ETH)
// Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

// Account #17: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E (10000 ETH)
// Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

// Account #18: 0xdD2FD4581271e230360230F9337D5c0430Bf44C0 (10000 ETH)
// Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

// Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
// Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

// const { ethers } = require("ethers");
// const WalletSDK = require("@railgun-community/wallet");
// const LevelDOWN = require("leveldown");
// const {
//   Artifact,
//   assertArtifactExists,
//   isDefined,
// } = require("@railgun-community/shared-models");
// const { MerkleTree } = require("./helpers/logic/merkletree");
// const { Wallet } = require("./helpers/logic/wallet");
// const { TokenType, Note } = require("./helpers/logic/note");
// const {
//   getFee,
//   dummyTransact,
//   UnshieldType,
// } = require("./helpers/logic/transaction");
// const { randomBytes } = require("./helpers/global/crypto");
// const { railgunABI } = require("./abis/railgunAbi");
// const { aaTokenABI } = require("./abis/aaTokenAbi");
// const {
//   encodeAddress,
//   decodeAddress,
// } = require("./helpers/railgunWallet/bech32");

const express = require("express");
const cors = require("cors");

const { Wallet, JsonRpcProvider, Contract, parseUnits } = require("ethers");
const { RailgunEngine } = require("@railgun-community/engine");
const {
  startRailgunEngine,
  ArtifactStore,
  getProver,
  Groth16,
  loadProvider,
  setLoggers,
  createRailgunWallet,
  walletForID,
  loadWalletByID,
  setOnBalanceUpdateCallback,
  setOnMerkletreeScanCallback,
  refreshRailgunBalances,
  gasEstimateForShield,
  populateShield,
  validateRailgunAddress,
  gasEstimateForUnprovenUnshield,
  generateUnshieldProof,
  populateProvedUnshield,
  gasEstimateForUnprovenTransfer,
  generateTransferProof,
  populateProvedTransfer,
  gasEstimateForUnprovenCrossContractCalls,
  generateCrossContractCallsProof,
  populateProvedCrossContractCalls,
} = require("@railgun-community/wallet");
const LevelDB = require("leveldown");
const fs = require("fs");
const { groth16 } = require("snarkjs");
const {
  FallbackProviderJsonConfig,
  NetworkName,
  NETWORK_CONFIG,
  EVMGasType,
} = require("@railgun-community/shared-models");
const keccak256 = require("keccak256");
const EventEmitter = require("events");
const http = require("http");
const socketIo = require("socket.io");
const { testErc20ABI } = require("./abis/TestERC20");
const { simpleSwap } = require("./abis/swap");

const eventEmitter = new EventEmitter();

const app = express();
const backendPort = 3010;
const eventPort = 3012;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/api/v2/getWallet1", async (req, res) => {
  const railgunWalletInfo = await createRailgunWallet(
    config.encryptionKey,
    config.mnemonic,
    {}
  );
  console.log({ railgunWalletInfo }); // id, railgunAddress
  res.json(railgunWalletInfo);
});

app.get("/api/v2/getWallet2", async (req, res) => {
  const railgunWalletInfo2 = await createRailgunWallet(
    config.encryptionKey2,
    config.mnemonic2,
    {}
  );
  console.log({ railgunWalletInfo2 }); // id, railgunAddress
  res.json(railgunWalletInfo2);
});

app.post("/api/v2/shield/AA", async (req, res) => {
  const { amountInDecimal, railgunAddress } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);

  // 3.1 give approval
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.privateKey, provider);
  // const testERC20ContractWithSigner = new Contract(
  //   config.contracts.testERC20,
  //   testErc20ABI,
  //   walletSigner
  // );
  // const recieptOfApproval = await testERC20ContractWithSigner.approve(
  //   config.contracts.proxy,
  //   parseUnits("100", 18)
  // );
  // console.log({ recieptOfApproval });
  // 3.2 shield
  const erc20AmountRecipients = [
    {
      tokenAddress: config.contracts.testERC20, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: railgunAddress, // RAILGUN address
    },
  ];
  // The shieldPrivateKey enables the sender to decrypt
  // the receiver's address in the future.
  const wallet = new Wallet(config.privateKey);
  const shieldSignatureMessage = "Hello world";
  const shieldPrivateKey = keccak256(
    await wallet.signMessage(shieldSignatureMessage)
  );
  const { gasEstimate: shieldGasEstimate } = await gasEstimateForShield(
    "Hardhat",
    shieldPrivateKey,
    erc20AmountRecipients,
    [], // nftAmountRecipients
    config.public // Public wallet to shield from.
  );
  console.log({ shieldGasEstimate });
  const gasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: shieldGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  const { transaction: shieldTransaction } = await populateShield(
    "Hardhat",
    shieldPrivateKey,
    erc20AmountRecipients,
    [], // nftAmountRecipients
    gasDetails
  );
  // Public wallet to shield from.
  shieldTransaction.from = config.public;
  // console.debug(transaction) // send it through relayer, or send it yourself
  const shieldTxReceipt = await walletSigner.sendTransaction(shieldTransaction);
  console.debug(shieldTxReceipt);

  res.json({
    transactionHash: shieldTxReceipt.hash,
  });
});

app.post("/api/v2/shield/BB", async (req, res) => {
  const { amountInDecimal, railgunAddress } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);

  // 3.1 give approval
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.privateKey, provider);
  // const testERC20ContractWithSigner = new Contract(
  //   config.contracts.testERC20,
  //   testErc20ABI,
  //   walletSigner
  // );
  // const recieptOfApproval = await testERC20ContractWithSigner.approve(
  //   config.contracts.proxy,
  //   parseUnits("100", 18)
  // );
  // console.log({ recieptOfApproval });
  // 3.2 shield
  const erc20AmountRecipients = [
    {
      tokenAddress: config.contracts.testERC202, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: railgunAddress, // RAILGUN address
    },
  ];
  // The shieldPrivateKey enables the sender to decrypt
  // the receiver's address in the future.
  const wallet = new Wallet(config.privateKey);
  const shieldSignatureMessage = "Hello world";
  const shieldPrivateKey = keccak256(
    await wallet.signMessage(shieldSignatureMessage)
  );
  const { gasEstimate: shieldGasEstimate } = await gasEstimateForShield(
    "Hardhat",
    shieldPrivateKey,
    erc20AmountRecipients,
    [], // nftAmountRecipients
    config.public // Public wallet to shield from.
  );
  console.log({ shieldGasEstimate });
  const gasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: shieldGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  const { transaction: shieldTransaction } = await populateShield(
    "Hardhat",
    shieldPrivateKey,
    erc20AmountRecipients,
    [], // nftAmountRecipients
    gasDetails
  );
  // Public wallet to shield from.
  shieldTransaction.from = config.public;
  // console.debug(transaction) // send it through relayer, or send it yourself
  const shieldTxReceipt = await walletSigner.sendTransaction(shieldTransaction);
  console.debug(shieldTxReceipt);

  res.json({
    transactionHash: shieldTxReceipt.hash,
  });
});

app.post("/api/v2/unshield/AA", async (req, res) => {
  const { amountInDecimal, id } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.relayerPrivateKey, provider);

  const erc20AmountRecipients2 = [
    {
      tokenAddress: config.contracts.testERC20, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: config.public, // normal address
    },
  ];
  // Gas price, used to calculate Relayer Fee iteratively.
  const originalGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: 0n, // Always 0, we don't have this yet.
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  // Whether to use a Relayer or self-signing wallet.
  // true for self-signing, false for Relayer.
  const sendWithPublicWallet = true;
  const { gasEstimate: unshieldGasEstimate } =
    await gasEstimateForUnprovenUnshield(
      "V2_PoseidonMerkle",
      "Hardhat",
      id,
      config.encryptionKey,
      erc20AmountRecipients2,
      [], // nftAmountRecipients
      originalGasDetails,
      {}, // Token Fee for selected Relayer.
      sendWithPublicWallet
    );
  console.log({ unshieldGasEstimate });
  console.log(`generate proof start - ${new Date().toLocaleString()}`);
  await generateUnshieldProof(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    config.encryptionKey,
    erc20AmountRecipients2,
    [], // nftAmountRecipients
    {}, // relayerFeeERC20AmountRecipient
    sendWithPublicWallet,
    BigInt("0x0"), // // Minimum gas price, only required for relayed transaction.
    progressCallback
  );
  console.log(`generate proof end - ${new Date().toLocaleString()}`);
  // send transaction
  // NOTE: Must follow proof generation.
  // Gas price, used to calculate Relayer Fee iteratively.
  const unshieldGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: unshieldGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  const { transaction: unshieldTransaction } = await populateProvedUnshield(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    erc20AmountRecipients2,
    [], // nftAmountRecipients
    {},
    sendWithPublicWallet,
    BigInt("0x0"),
    unshieldGasDetails
  );
  // Public wallet to send from.
  unshieldTransaction.from = config.relayerPublic;
  // console.debug(unshieldTransaction) // send it through relayer, or send it yourself
  const unshieldTxReceipt = await walletSigner.sendTransaction(
    unshieldTransaction
  );
  console.debug(unshieldTxReceipt);

  res.json({
    transactionHash: unshieldTxReceipt.hash,
  });
});

app.post("/api/v2/unshield/BB", async (req, res) => {
  const { amountInDecimal, id } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.relayerPrivateKey, provider);

  const erc20AmountRecipients2 = [
    {
      tokenAddress: config.contracts.testERC202, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: config.public, // normal address
    },
  ];
  // Gas price, used to calculate Relayer Fee iteratively.
  const originalGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: 0n, // Always 0, we don't have this yet.
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  // Whether to use a Relayer or self-signing wallet.
  // true for self-signing, false for Relayer.
  const sendWithPublicWallet = true;
  const { gasEstimate: unshieldGasEstimate } =
    await gasEstimateForUnprovenUnshield(
      "V2_PoseidonMerkle",
      "Hardhat",
      id,
      config.encryptionKey,
      erc20AmountRecipients2,
      [], // nftAmountRecipients
      originalGasDetails,
      {}, // Token Fee for selected Relayer.
      sendWithPublicWallet
    );
  console.log({ unshieldGasEstimate });
  console.log(`generate proof start - ${new Date().toLocaleString()}`);
  await generateUnshieldProof(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    config.encryptionKey,
    erc20AmountRecipients2,
    [], // nftAmountRecipients
    {}, // relayerFeeERC20AmountRecipient
    sendWithPublicWallet,
    BigInt("0x0"), // // Minimum gas price, only required for relayed transaction.
    progressCallback
  );
  // send transaction
  // NOTE: Must follow proof generation.
  // Gas price, used to calculate Relayer Fee iteratively.
  const unshieldGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: unshieldGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  const { transaction: unshieldTransaction } = await populateProvedUnshield(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    erc20AmountRecipients2,
    [], // nftAmountRecipients
    {},
    sendWithPublicWallet,
    BigInt("0x0"),
    unshieldGasDetails
  );
  // Public wallet to send from.
  unshieldTransaction.from = config.relayerPublic;
  // console.debug(unshieldTransaction) // send it through relayer, or send it yourself
  const unshieldTxReceipt = await walletSigner.sendTransaction(
    unshieldTransaction
  );
  console.debug(unshieldTxReceipt);

  res.json({
    transactionHash: unshieldTxReceipt.hash,
  });
});

app.post("/api/v2/transfer/AA", async (req, res) => {
  const { to, amountInDecimal, id } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.relayerPrivateKey, provider);

  // Optional encrypted memo text only readable by the sender and receiver.
  // May include text and emojis. See "Private Transfers" page for details.
  const memoText = "Thank you for breakfast! 🍝😋";

  // Formatted token amounts to transfer.
  const erc20AmountRecipients3 = [
    {
      tokenAddress: config.contracts.testERC20, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: to,
    },
  ];

  // Gas price, used to calculate Relayer Fee iteratively.
  const originalGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: 0n, // Always 0, we don't have this yet.
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  // Whether to use a Relayer or self-signing wallet.
  // true for self-signing, false for Relayer.
  const sendWithPublicWallet = true;
  const { gasEstimate: transferGasEstimate } =
    await gasEstimateForUnprovenTransfer(
      "V2_PoseidonMerkle",
      "Hardhat",
      id,
      config.encryptionKey,
      memoText,
      erc20AmountRecipients3,
      [], // nftAmountRecipients
      originalGasDetails,
      {},
      sendWithPublicWallet
    );
  console.log({ transferGasEstimate });
  console.log(`generate proof start - ${new Date().toLocaleString()}`);
  await generateTransferProof(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    config.encryptionKey,
    false, // showSenderAddressToRecipient
    memoText,
    erc20AmountRecipients3,
    [], // nftAmountRecipients
    {}, // relayerFeeERC20AmountRecipient
    sendWithPublicWallet,
    BigInt("0x0"), // // Minimum gas price, only required for relayed transaction.
    progressCallback
  );

  // send transaction
  // NOTE: Must follow proof generation.
  // Gas price, used to calculate Relayer Fee iteratively.
  const transferGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: transferGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };

  const { transaction: transferTransaction } = await populateProvedTransfer(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    false, // showSenderAddressToRecipient
    memoText,
    erc20AmountRecipients3,
    [], // nftAmountRecipients
    {},
    sendWithPublicWallet,
    BigInt("0x0"),
    transferGasDetails
  );
  // Public wallet to send from.
  transferTransaction.from = config.relayerPublic;
  // console.debug(unshieldTransaction) // send it through relayer, or send it yourself
  const transferTxReceipt = await walletSigner.sendTransaction(
    transferTransaction
  );
  console.debug(transferTxReceipt);

  res.json({
    transactionHash: transferTxReceipt.hash,
  });
});

app.post("/api/v2/transfer/BB", async (req, res) => {
  const { to, amountInDecimal, id } = req.body;

  // amountInDecimal = "3.0", "1.5", ... -> amountInHex = "0xDE0B6B3A7640000"
  const amountInHex = decimalStrToHeximalStr(amountInDecimal);
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet(config.relayerPrivateKey, provider);

  // Optional encrypted memo text only readable by the sender and receiver.
  // May include text and emojis. See "Private Transfers" page for details.
  const memoText = "Thank you for breakfast! 🍝😋";

  // Formatted token amounts to transfer.
  const erc20AmountRecipients3 = [
    {
      tokenAddress: config.contracts.testERC202, // testERC20
      amount: BigInt(amountInHex), // 1*10^18 in hexadecimal amount
      recipientAddress: to,
    },
  ];

  // Gas price, used to calculate Relayer Fee iteratively.
  const originalGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: 0n, // Always 0, we don't have this yet.
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };
  // Whether to use a Relayer or self-signing wallet.
  // true for self-signing, false for Relayer.
  const sendWithPublicWallet = true;
  const { gasEstimate: transferGasEstimate } =
    await gasEstimateForUnprovenTransfer(
      "V2_PoseidonMerkle",
      "Hardhat",
      id,
      config.encryptionKey,
      memoText,
      erc20AmountRecipients3,
      [], // nftAmountRecipients
      originalGasDetails,
      {},
      sendWithPublicWallet
    );
  console.log({ transferGasEstimate });
  console.log(`generate proof start - ${new Date().toLocaleString()}`);
  await generateTransferProof(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    config.encryptionKey,
    false, // showSenderAddressToRecipient
    memoText,
    erc20AmountRecipients3,
    [], // nftAmountRecipients
    {}, // relayerFeeERC20AmountRecipient
    sendWithPublicWallet,
    BigInt("0x0"), // // Minimum gas price, only required for relayed transaction.
    progressCallback
  );

  // send transaction
  // NOTE: Must follow proof generation.
  // Gas price, used to calculate Relayer Fee iteratively.
  const transferGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: transferGasEstimate, // Output from gasEstimateForDeposit
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };

  const { transaction: transferTransaction } = await populateProvedTransfer(
    "V2_PoseidonMerkle",
    "Hardhat",
    id,
    false, // showSenderAddressToRecipient
    memoText,
    erc20AmountRecipients3,
    [], // nftAmountRecipients
    {},
    sendWithPublicWallet,
    BigInt("0x0"),
    transferGasDetails
  );
  // Public wallet to send from.
  transferTransaction.from = config.relayerPublic;
  // console.debug(unshieldTransaction) // send it through relayer, or send it yourself
  const transferTxReceipt = await walletSigner.sendTransaction(
    transferTransaction
  );
  console.debug(transferTxReceipt);

  res.json({
    transactionHash: transferTxReceipt.hash,
  });
});

app.post("/api/V2/swap", async (req, res) => {
  const { sell, amount, buy, id, zkWallet } = req.body;

  const originalGasDetails = {
    evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
    gasEstimate: 0n, // Always 0, we don't have this yet.
    maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
    maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  };

  const sendWithPublicWallet = true;

  const unshieldERC20Amounts = [
    {
      tokenAddress: sell.toLowerCase(),
      amount: parseUnits(amount, 18),
    },
  ];

  const shieldERC20Recipients = [
    { tokenAddress: buy.toLowerCase(), recipientAddress: zkWallet },
  ];

  const sellTokenAmountAfterUnshieldFee =
    (parseFloat(amount) * (10000 - 25)) / 10000;
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const erc20 = new Contract(sell.toLowerCase(), testErc20ABI, provider);
  const transactionApproveSwap = await erc20.approve.populateTransaction(
    config.contracts.swap,
    parseUnits(sellTokenAmountAfterUnshieldFee.toString(), 18)
  );
  const swap = new Contract(
    config.contracts.swap.toLowerCase(),
    simpleSwap,
    provider
  );
  const transactionSwap = await swap.swap.populateTransaction(
    sell.toLowerCase(),
    buy.toLowerCase(),
    parseUnits(sellTokenAmountAfterUnshieldFee.toString(), 18),
    "10000"
  );

  const crossContractCalls = [transactionApproveSwap, transactionSwap];

  // const railgunWalletInfo = await loadWalletByID(config.encryptionKey, id);
  // console.log(railgunWalletInfo);

  const railgunWalletInfo = await createRailgunWallet(
    config.encryptionKey,
    config.mnemonic,
    {}
  );

  const { gasEstimate: crossContractGasEstimate } =
    await gasEstimateForUnprovenCrossContractCalls(
      "V2_PoseidonMerkle",
      "Hardhat",
      railgunWalletInfo.id,
      config.encryptionKey,
      unshieldERC20Amounts, // "relayAdaptUnshieldERC20Amounts: RailgunERC20Amount[]", // unshieldERC20Amounts[]
      [], //RailgunNFTAmount[]
      shieldERC20Recipients, // "relayAdaptShieldERC20Recipients: RailgunERC20Recipient[]",
      [], // nftAmountRecipients
      crossContractCalls, // "crossContractCalls: ContractTransaction[]",
      originalGasDetails,
      {}, // feeTokenDetails
      sendWithPublicWallet,
      2700000n // minGasLimit
    );
  console.log("crossContractGasEstimate", crossContractGasEstimate);

  console.log(
    `generate cross contract proof start - ${new Date().toLocaleString()}`
  );
  await generateCrossContractCallsProof(
    "V2_PoseidonMerkle",
    "Hardhat",
    railgunWalletInfo.id,
    config.encryptionKey,
    unshieldERC20Amounts,
    [],
    shieldERC20Recipients,
    [],
    crossContractCalls,
    undefined,
    sendWithPublicWallet,
    undefined,
    2700000n,
    progressCallback
  );

  const gasDetails = {
    evmGasType: EVMGasType.Type2,
    gasEstimate: crossContractGasEstimate,
    maxFeePerGas: BigInt("0x100000"),
    maxPriorityFeePerGas: BigInt("0x010000"),
  };

  const { transaction: crossContractCallTransaction } =
    await populateProvedCrossContractCalls(
      "V2_PoseidonMerkle",
      "Hardhat",
      railgunWalletInfo.id,
      unshieldERC20Amounts,
      [],
      shieldERC20Recipients,
      [],
      crossContractCalls,
      undefined,
      sendWithPublicWallet,
      undefined,
      gasDetails
    );

  // Public wallet to send from.
  crossContractCallTransaction.from = config.relayerPublic;
  const walletSigner = new Wallet(config.relayerPrivateKey, provider);
  const crossContractCallTxReceipt = await walletSigner.sendTransaction(
    crossContractCallTransaction
  );
  console.debug(crossContractCallTxReceipt);

  res.json({
    transactionHash: crossContractCallTxReceipt.hash,
  });
});

let config = {
  rpc: "http://localhost:8545/",
  chainId: 31337,
  mnemonic: "test test test test test test test test test test test junk",
  encryptionKey:
    "0101010101010101010101010101010101010101010101010101010101010101", // Database encryption key. Keep this very safe.
  public: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", // hardhat public key for testing
  privateKey:
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", // hardhat private key for testing
  relayerPublic: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // hardhat public key for testing
  relayerPrivateKey:
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", // hardhat private key for testing
  contracts: {
    delegator: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    governorRewardsImplementation: "",
    governorRewardsProxy: "",
    implementation: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
    proxy: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788", // user give approve of erc20 to this address -> pool
    proxyAdmin: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    rail: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    staking: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    testERC20: "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB",
    testERC202: "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8",
    testERC721: "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8",
    treasuryImplementation: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    treasuryProxy: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    voting: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    weth9: "0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7",
    relayAdapt: "0x0355B7B8cb128fA5692729Ab3AAa199C1753f726",
    swap: "0x172076E0166D1F9Cc711C77Adf8488051744980C",
  },
  mnemonic2: "test test test test test test test test test test junk junk",
  encryptionKey2:
    "0202020202020202020202020202020202020202020202020202020202020202", // Database encryption key. Keep this very safe.
};

const decimalStrToHeximalStr = (decimalStr) => {
  const decimalNumber = parseFloat(decimalStr);
  const weiValue = decimalNumber * 10 ** 18;
  const hexString = weiValue.toString(16);
  const paddedHexString = hexString.padStart(16, "0");
  return "0x" + paddedHexString;
};

const createDownloadDirPath = (documentsDir, path) => {
  return `${documentsDir}/${path}`;
};

const createArtifactStore = (documentsDir) => {
  const getFile = async (path) => {
    return fs.promises.readFile(createDownloadDirPath(documentsDir, path));
  };

  const storeFile = async (dir, path, item) => {
    await fs.promises.mkdir(createDownloadDirPath(documentsDir, dir), {
      recursive: true,
    });
    await fs.promises.writeFile(
      createDownloadDirPath(documentsDir, path),
      item
    );
  };

  const fileExists = (path) => {
    return new Promise((resolve) => {
      fs.promises
        .access(createDownloadDirPath(documentsDir, path))
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  };

  return new ArtifactStore(getFile, storeFile, fileExists);
};

const initialize = () => {
  // Name for your wallet implementation.
  // Encrypted and viewable in private transaction history.
  // Maximum of 16 characters, lowercase.
  const walletSource = "quickstart demo";

  // LevelDOWN compatible database for storing encrypted wallets.
  const dbPath = "engine.db";
  const db = new LevelDB(dbPath);

  // Whether to forward Engine debug logs to Logger.
  const shouldDebug = true;

  // Persistent store for downloading large artifact files.
  // See [Getting Started #2: Build a persistent store] for implementations.
  const artifactStore = createArtifactStore(
    "/Users/sumonwan.s/Documents/KBTG/carina/labs/railgun-experimental/backend/src/artifacts"
  );

  // Whether to download native C++ or web-assembly artifacts.
  // True for mobile. False for nodejs and browser.
  const useNativeArtifacts = false;

  // Whether to skip merkletree syncs and private balance scans.
  // Only set to TRUE in shield-only applications that don't
  //  load private wallets or balances.
  const skipMerkletreeScans = false;

  return startRailgunEngine(
    walletSource,
    db,
    shouldDebug,
    artifactStore,
    useNativeArtifacts,
    skipMerkletreeScans
  );
};

const getLocalhostRPC = (port) => {
  return `http://127.0.0.1:${port}`;
};

const progressCallback = async (progress) => {
  // Handle proof progress (show in UI).
  // Proofs can take 20-30 seconds on slower devices.
  if (progress === 100) {
    console.log(
      `generate proof success ${progress} - ${new Date().toLocaleString()}`
    );
  }
};

const chainId = NETWORK_CONFIG["Hardhat"].chain.id;
const port = "8545";

const loadProviderConfig = async () => {
  const localhostProviderConfig = {
    chainId,
    providers: [
      {
        provider: getLocalhostRPC(port),
        priority: 1,
        weight: 2,
      },
    ],
  };

  const pollingInterval = 300;
  const { feesSerialized } = await loadProvider(
    localhostProviderConfig,
    "Hardhat",
    pollingInterval
  );

  console.debug(feesSerialized);
};
const setLogger = async () => {
  const logMessage = console.log;
  const logError = console.error;

  setLoggers(logMessage, logError);
};

const myRailgunWalletOn = async () => {
  initialize();
  getProver().setSnarkJSGroth16(groth16);
  await loadProviderConfig();
  await setLogger();

  // // to /getWallet1
  // const railgunWalletInfo = await createRailgunWallet(
  //   config.encryptionKey,
  //   config.mnemonic,
  //   {}
  // );
  // console.log({ railgunWalletInfo });

  // 1. init balance callback
  const onBalanceUpdateCallback = (
    chain,
    railgunWalletID,
    erc20Amounts,
    nftAmounts
  ) => {
    console.log("//// balance update callback start ////");
    // console.log({ chain });
    console.debug(chain);
    eventEmitter.emit("newBalanceForYouKa", chain);
    // console.log({ railgunWalletID });
    // console.debug(erc20Amounts)
    console.log("//// balance update callback end ////");
  };
  setOnBalanceUpdateCallback(onBalanceUpdateCallback);

  // 2. init merkletree callback
  const onMerkletreeScanCallback = ({ chain, scanStatus, progress }) => {
    console.log("//// merkle tree callback start ////");
    console.log({ chain });
    console.log({ scanStatus });
    console.log({ progress });
    console.log("//// merkle tree callback end ////");
  };
  setOnMerkletreeScanCallback(onMerkletreeScanCallback);

  // // 3.1 give approval
  // const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  // const walletSigner = new Wallet(config.privateKey, provider);
  // const testERC20ContractWithSigner = new Contract(
  //   config.contracts.testERC20,
  //   testErc20ABI,
  //   walletSigner
  // );
  // const recieptOfApproval = await testERC20ContractWithSigner.approve(
  //   config.contracts.proxy,
  //   parseUnits("100", 18)
  // );
  // console.log({ recieptOfApproval });
  // // 3.2 shield
  // const erc20AmountRecipients = [
  //   {
  //     tokenAddress: config.contracts.testERC20, // testERC20
  //     amount: BigInt("0xDE0B6B3A7640000"), // 1*10^18 in hexadecimal amount
  //     recipientAddress: railgunWalletInfo.railgunAddress, // RAILGUN address
  //   },
  // ];
  // // The shieldPrivateKey enables the sender to decrypt
  // // the receiver's address in the future.
  // const wallet = new Wallet(config.privateKey);
  // const shieldSignatureMessage = "Hello world";
  // const shieldPrivateKey = keccak256(
  //   await wallet.signMessage(shieldSignatureMessage)
  // );
  // const { gasEstimate: shieldGasEstimate } = await gasEstimateForShield(
  //   "Hardhat",
  //   shieldPrivateKey,
  //   erc20AmountRecipients,
  //   [], // nftAmountRecipients
  //   config.public // Public wallet to shield from.
  // );
  // console.log({ shieldGasEstimate });
  // const gasDetails = {
  //   evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
  //   gasEstimate: shieldGasEstimate, // Output from gasEstimateForDeposit
  //   maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
  //   maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  // };
  // const { transaction: shieldTransaction } = await populateShield(
  //   "Hardhat",
  //   shieldPrivateKey,
  //   erc20AmountRecipients,
  //   [], // nftAmountRecipients
  //   gasDetails
  // );
  // // Public wallet to shield from.
  // shieldTransaction.from = config.public;
  // // console.debug(transaction) // send it through relayer, or send it yourself
  // const shieldTxReceipt = await walletSigner.sendTransaction(shieldTransaction);
  // console.debug(shieldTxReceipt);

  // 4. unshield
  // const erc20AmountRecipients2 = [
  //   {
  //     tokenAddress: config.contracts.testERC20, // testERC20
  //     amount: BigInt("0xDE0B6B3A7640000"), // 1*10^18 in hexadecimal amount
  //     recipientAddress: config.public, // normal address
  //   },
  // ];
  // // Gas price, used to calculate Relayer Fee iteratively.
  // const originalGasDetails = {
  //   evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
  //   gasEstimate: 0n, // Always 0, we don't have this yet.
  //   maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
  //   maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  // };
  // // Whether to use a Relayer or self-signing wallet.
  // // true for self-signing, false for Relayer.
  // const sendWithPublicWallet = true;
  // const { gasEstimate: unshieldGasEstimate } =
  //   await gasEstimateForUnprovenUnshield(
  //     "V2_PoseidonMerkle",
  //     "Hardhat",
  //     railgunWalletInfo.id,
  //     config.encryptionKey,
  //     erc20AmountRecipients2,
  //     [], // nftAmountRecipients
  //     originalGasDetails,
  //     {}, // Token Fee for selected Relayer.
  //     sendWithPublicWallet
  //   );
  // console.log({ unshieldGasEstimate });
  // console.log(`generate proof start - ${new Date().toLocaleString()}`);
  // await generateUnshieldProof(
  //   "V2_PoseidonMerkle",
  //   "Hardhat",
  //   railgunWalletInfo.id,
  //   config.encryptionKey,
  //   erc20AmountRecipients2,
  //   [], // nftAmountRecipients
  //   {}, // relayerFeeERC20AmountRecipient
  //   sendWithPublicWallet,
  //   BigInt("0x0"), // // Minimum gas price, only required for relayed transaction.
  //   progressCallback
  // );
  // // send transaction
  // // NOTE: Must follow proof generation.
  // // Gas price, used to calculate Relayer Fee iteratively.
  // const unshieldGasDetails = {
  //   evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
  //   gasEstimate: unshieldGasEstimate, // Output from gasEstimateForDeposit
  //   maxFeePerGas: BigInt("0x100000"), // Current gas Max Fee
  //   maxPriorityFeePerGas: BigInt("0x010000"), // Current gas Max Priority Fee
  // };
  // const { transaction: unshieldTransaction } = await populateProvedUnshield(
  //   "V2_PoseidonMerkle",
  //   "Hardhat",
  //   railgunWalletInfo.id,
  //   erc20AmountRecipients2,
  //   [], // nftAmountRecipients
  //   {},
  //   sendWithPublicWallet,
  //   BigInt("0x0"),
  //   unshieldGasDetails
  // );
  // // Public wallet to shield from.
  // unshieldTransaction.from = config.public;
  // // console.debug(unshieldTransaction) // send it through relayer, or send it yourself
  // const unshieldTxReceipt = await walletSigner.sendTransaction(
  //   unshieldTransaction
  // );
  // console.debug(unshieldTxReceipt);
};

const startServer = async () => {
  try {
    // Start the Express.js server
    app.listen(backendPort, () => {
      console.log(`Server is running on port ${backendPort}`);
    });
  } catch (err) {
    // Handle any errors that occur during server startup
    console.error("Server startup error:", err);
  }
};

const setupWebSocketServer = () => {
  return new Promise((resolve, reject) => {
    const server = http.createServer(app);
    const io = socketIo(server);

    io.on("connection", (socket) => {
      console.log("A client has connected.");

      // Set CORS headers for this specific WebSocket connection
      socket.handshake.headers.origin = "http://localhost:3000";

      // Listen for the 'newBalanceForYouKa' event and emit it to the connected clients
      eventEmitter.on("newBalanceForYouKa", (chain) => {
        chain.erc20Amounts.forEach((erc20Amount) => {
          erc20Amount.amount = erc20Amount.amount.toString();
        });

        socket.emit("newBalanceForYouKa", chain);
      });
    });

    server.listen(eventPort, () => {
      console.log(`WebSocket server is running on port ${eventPort}`);
      resolve(); // Resolve the promise when the server is ready
    });
  });
};

// Create a function to set up the WebSocket server and return a promise
const eventConnection = setupWebSocketServer;

// Run both test and startServer concurrently using Promise.all()
Promise.all([myRailgunWalletOn(), startServer(), eventConnection()])
  .then(([testResult]) => {
    console.log(
      "myRailgunWalletOn, eventConnection and server started successfully."
    );
  })
  .catch((err) => {
    console.log("errorrrrrrrrr");
    console.error("Error:", err);
  });

// const testERC20 = {
//   address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
//   abi: aaTokenABI,
// };
// const railgunWalletStub = {
//   address: "0x3aC005eCF84B510fd3Ff37133c1a641Cd79879b5",
//   abi: railgunABI,
// };
// const deployerAndSnarkByPass = {
//   publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
//   privateKey:
//     "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
// };

// const merkletreePromise = MerkleTree.createTree();
// const wallet1 = new Wallet(randomBytes(32), randomBytes(32));
// const wallet2 = new Wallet(randomBytes(32), randomBytes(32));

// const tokenData = {
//   tokenType: TokenType.ERC20,
//   tokenAddress: testERC20.address,
//   tokenSubID: 0n,
// };
// wallet1.tokens.push(tokenData);
// wallet2.tokens.push(tokenData);

// const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
// const snarkBypassSigner = new ethers.Wallet(
//   deployerAndSnarkByPass.privateKey,
//   provider
// );
// const railgunSmartWalletSnarkBypass = new ethers.Contract(
//   railgunWalletStub.address,
//   railgunWalletStub.abi,
//   snarkBypassSigner
// );

// // Route to get wallet1
// app.get("/getWallet1", (req, res) => {
//   // Return wallet1 as JSON response
//   const wallet1Data = {
//     spendingKey: wallet1.spendingKey,
//     viewingKey: wallet1.viewingKey,
//   };

//   const encoded = encodeAddress(wallet1Data);
//   console.debug(encoded);
//   res.json({
//     spendingAddress: encoded.spendingAddress,
//     viewingAddress: encoded.viewingAddress,
//   });
// });

// app.get("/getWallet2", (req, res) => {
//   const wallet2Data = {
//     spendingKey: wallet2.spendingKey,
//     viewingKey: wallet2.viewingKey,
//   };

//   const encoded = encodeAddress(wallet2Data);
//   // Return wallet1 as JSON response
//   res.json({
//     spendingAddress: encoded.spendingAddress,
//     viewingAddress: encoded.viewingAddress,
//     //   viewingKey: wallet2.viewingKey,
//   });
// });

// app.post("/shield/:amount", async (req, res) => {
//   const merkletree = await merkletreePromise;

//   const { amount } = req.params;
//   //   const decoded = decodeAddress(addressPair);
//   const shieldNotes = [
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits(amount, 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//   ];

//   // shield notes
//   const shieldTransaction = await railgunSmartWalletSnarkBypass.shield([
//     ...(await Promise.all(shieldNotes.map((note) => note.encryptForShield()))),
//   ]);
//   console.debug(shieldTransaction);

//   const totalShielded = shieldNotes
//     .map((note) => note.value)
//     .reduce((left, right) => left + right);

//   // Calculate shield amounts
//   const shieldAmounts = getFee(
//     totalShielded,
//     true,
//     await railgunSmartWalletSnarkBypass.shieldFee()
//   );
//   console.debug(shieldAmounts);

//   // Scan transaction
//   await merkletree.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   await wallet1.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   await wallet2.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   //   console.debug(merkletree.tree);
//   //   console.debug(wallet1.notes);
//   //   console.debug(wallet2.notes);

//   const wallet1Balance = await wallet1.getBalance(merkletree, tokenData);

//   res.json({
//     transactionHash: shieldTransaction.hash,
//     newBalance: ethers.formatEther(wallet1Balance),
//   });

//   //   console.debug(await wallet1.getBalance(merkletree, tokenData));
//   //   console.debug(await wallet2.getBalance(merkletree, tokenData));
// });

// // TODO: test
// app.get("/scan", async (req, res) => {
//   const merkletree = await merkletreePromise;
//   const wallet1Balance = await wallet1.getBalance(merkletree, tokenData);
//   const scanresult = ethers.formatEther(wallet1Balance);
//   console.log("balance ", scanresult);
//   res.json({
//     newBalance: ethers.formatEther(wallet1Balance),
//   });
// });

// app.get("/mockscan", async (req, res) => {
//   res.json({
//     newBalance: "9.96",
//   });
// });

// app.post("/mockshield/:amount", async (req, res) => {
//   res.json({
//     newBalance: "9.96",
//     transactionHash:
//       "0xa47c2d65ae630a599dc429be4b671d91e03d31f65a17ee96ff3d316705268bee",
//   });
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(
//     `Express server is running on port ${port}\nAlways re-deploy contract before start the server`
//   );
// });

// const start = async () => {
//   ////////// setup //////////
//   const testERC20 = {
//     address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
//     abi: aaTokenABI,
//   };
//   const railgunWalletStub = {
//     address: "0x95316A83B4Ac1bC7185105C628607083c895810b",
//     abi: railgunABI,
//   };
//   const deployerAndSnarkByPass = {
//     publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
//     privateKey:
//       "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
//   };
//   const wallet1AsMine = {
//     publicKey: "0x4B71804d520d200D90085925B1B207329da859A3",
//     privateKey:
//       "0x6f587b818eee7882908c484b193773c22d32a926f9e82fd2c8000776a7eb4123",
//   };
//   const wallet2AsBob = {
//     publicKey: "0xC0e64f24BBe5bdfE5e494f5ac188315e1022659b",
//     privateKey:
//       "0xa23971258806bcf66b6a037ec43326745c06c4ccdb57fba3c40f38f1ecba1a23",
//   };
//   const merkletree = await MerkleTree.createTree();
//   // create new wallet see: Railgun-Community/engine/src/wallet/railgun-wallet.ts
//   // derive key from mnemonic -> seed -> specific_path
//   //   export type SpendingPublicKey = [bigint, bigint];
//   //   export type SpendingKeyPair = { privateKey: Uint8Array; pubkey: SpendingPublicKey };
//   //   export type ViewingKeyPair = { privateKey: Uint8Array; pubkey: Uint8Array };
//   const wallet1 = new Wallet(randomBytes(32), randomBytes(32));
//   const wallet2 = new Wallet(randomBytes(32), randomBytes(32));
//   const wallet1Data = {
//     spendingKey: wallet1.spendingKey,
//     viewingKey: wallet1.viewingKey,
//   };
//   const wallet2Data = {
//     spendingKey: wallet2.spendingKey,
//     viewingKey: wallet2.viewingKey,
//   };
//   console.debug(wallet1Data);
//   console.debug(wallet2Data);
//   // encode - decode address
//   //   const addressData1 = {
//   //     spendingKey: wallet1.spendingKey,
//   //     viewingKey: wallet1.viewingKey,
//   //   };
//   //   console.log(wallet1.spendingKey);
//   //   console.log(wallet1.viewingKey);
//   //   const encoded = encodeAddress(addressData1);
//   //   console.debug(encoded);
//   //   const decoded = decodeAddress(encoded);
//   //   console.debug(decoded);
//   const tokenData = {
//     tokenType: TokenType.ERC20,
//     tokenAddress: testERC20.address,
//     tokenSubID: 0n,
//   };
//   wallet1.tokens.push(tokenData);
//   wallet2.tokens.push(tokenData);

//   // connect to rpc
//   const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
//   const snarkBypassSigner = new ethers.Wallet(
//     deployerAndSnarkByPass.privateKey,
//     provider
//   );
//   const aaContractSnarkBypassSigner = new ethers.Contract(
//     testERC20.address,
//     testERC20.abi,
//     snarkBypassSigner
//   );
//   const railgunSmartWalletSnarkBypass = new ethers.Contract(
//     railgunWalletStub.address,
//     railgunWalletStub.abi,
//     snarkBypassSigner
//   );

//   ////////// Shield notes //////////
//   const shieldNotes = [
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits("1", 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits("1", 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits("1", 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits("1", 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//     new Note(
//       wallet1.spendingKey,
//       wallet1.viewingKey,
//       ethers.parseUnits("1", 18),
//       randomBytes(16),
//       tokenData,
//       ""
//     ),
//   ];
//   //   console.debug(shieldNotes);
//   // snarkBypass approve for 'railgunWalletStub'
//   const recieptOfsnarkBypassApproval =
//     await aaContractSnarkBypassSigner.approve(
//       railgunWalletStub.address,
//       ethers.parseUnits("20", 18)
//     );
//   console.debug(recieptOfsnarkBypassApproval);
//   // shield notes
//   const shieldTransaction = await railgunSmartWalletSnarkBypass.shield([
//     ...(await Promise.all(shieldNotes.map((note) => note.encryptForShield()))),
//   ]);
//   console.debug(shieldTransaction);
//   const treasuryBalance1 = await aaContractSnarkBypassSigner.balanceOf(
//     railgunWalletStub.address
//   );
//   console.log("Treasury Balance:", ethers.formatUnits(treasuryBalance1, 18));

//   const totalShielded = shieldNotes
//     .map((note) => note.value)
//     .reduce((left, right) => left + right);

//   // Calculate shield amounts
//   const shieldAmounts = getFee(
//     totalShielded,
//     true,
//     await railgunSmartWalletSnarkBypass.shieldFee()
//   );
//   console.debug(shieldAmounts);

//   // Scan transaction
//   await merkletree.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   await wallet1.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   await wallet2.scanTX(shieldTransaction, railgunSmartWalletSnarkBypass);
//   //   console.debug(merkletree.tree);
//   //   console.debug(wallet1.notes);
//   //   console.debug(wallet2.notes);

//   console.debug(await wallet1.getBalance(merkletree, tokenData));
//   console.debug(await wallet2.getBalance(merkletree, tokenData));

//   ////////// Transfer shielded notes //////////
//   // Transfer tokens between shielded balances
//   const chainID = BigInt(await provider.send("eth_chainId", []));
//   //   const transferNotes = await wallet1.getTestTransactionInputs(
//   //     merkletree,
//   //     2,
//   //     3,
//   //     false,
//   //     tokenData,
//   //     wallet2.spendingKey,
//   //     wallet2.viewingKey
//   //   );

//   //   const dummyTransactions = await dummyTransact(
//   //     merkletree,
//   //     0n,
//   //     UnshieldType.NONE,
//   //     chainID,
//   //     ethers.ZeroAddress,
//   //     new Uint8Array(32),
//   //     transferNotes.inputs,
//   //     transferNotes.outputs
//   //   );
//   //   console.log("dummyTransaction");
//   //   console.debug(dummyTransactions);

//   //   const transferTransaction = await railgunSmartWalletSnarkBypass.transact([
//   //     dummyTransactions,
//   //   ]);
//   //   console.debug(transferTransaction);

//   //   // Calculate total transferred
//   //   const totalTransferred = transferNotes.outputs
//   //     .map((note) => note.value)
//   //     .reduce((left, right) => left + right);
//   //   console.debug(totalTransferred);

//   //   // Scan transaction
//   //   await merkletree.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);
//   //   await wallet1.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);
//   //   await wallet2.scanTX(transferTransaction, railgunSmartWalletSnarkBypass);

//   //   console.debug(await wallet1.getBalance(merkletree, tokenData));
//   //   console.debug(await wallet2.getBalance(merkletree, tokenData));

//   ////////// Unshield notes //////////
//   //   const unshieldNotes = await wallet1.getTestTransactionInputs(
//   //     merkletree,
//   //     2,
//   //     3,
//   //     wallet1AsMine.publicKey,
//   //     tokenData,
//   //     wallet1.spendingKey,
//   //     wallet1.viewingKey
//   //   );
//   //   const unshieldTransaction = await railgunSmartWalletSnarkBypass.transact([
//   //     await dummyTransact(
//   //       merkletree,
//   //       0n,
//   //       UnshieldType.NORMAL,
//   //       chainID,
//   //       ethers.ZeroAddress,
//   //       new Uint8Array(32),
//   //       unshieldNotes.inputs,
//   //       unshieldNotes.outputs
//   //     ),
//   //   ]);
//   //   console.debug(unshieldTransaction);

//   //   // Get total unshielded
//   //   const totalUnshielded =
//   //     unshieldNotes.outputs[unshieldNotes.outputs.length - 1].value;

//   //   // Calculate unshield amount
//   //   const unshieldAmounts = getFee(
//   //     totalUnshielded,
//   //     true,
//   //     (await railgunSmartWalletSnarkBypass.unshieldFee()).toBigInt()
//   //   );
//   //   console.debug(unshieldAmounts);

//   //   // Scan transaction
//   //   await merkletree.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);
//   //   await wallet1.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);
//   //   await wallet2.scanTX(unshieldTransaction, railgunSmartWalletSnarkBypass);

//   //   console.debug(await wallet1.getBalance(merkletree, tokenData));
//   //   console.debug(await wallet2.getBalance(merkletree, tokenData));
// };

// // start();

// const test = async () => {
//   const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
//   console.debug(BigInt(await provider.send("eth_chainId", [])));
//   // const chainID = toString(BigInt(await provider.send("eth_chainId", [])));
// };

// // test()

// const scan = async () => {
//   ////////// setup //////////
//   const testERC20 = {
//     address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
//     abi: aaTokenABI,
//   };

//   const railgunWalletStub = {
//     address: "0x381F42760948581589C0e4e862dB2e0865e2C699",
//     abi: railgunABI,
//   };

//   const deployerAndSnarkByPass = {
//     publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
//     privateKey:
//       "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
//   };

//   const wallet1AsMine = {
//     publicKey: "0x4B71804d520d200D90085925B1B207329da859A3",
//     privateKey:
//       "0x6f587b818eee7882908c484b193773c22d32a926f9e82fd2c8000776a7eb4123",
//   };
//   const wallet2AsBob = {
//     publicKey: "0xC0e64f24BBe5bdfE5e494f5ac188315e1022659b",
//     privateKey:
//       "0xa23971258806bcf66b6a037ec43326745c06c4ccdb57fba3c40f38f1ecba1a23",
//   };

//   // contract balance
//   const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
//   const snarkBypassSigner = new ethers.Wallet(
//     deployerAndSnarkByPass.privateKey,
//     provider
//   );
//   const aaContractSnarkBypassSigner = new ethers.Contract(
//     testERC20.address,
//     testERC20.abi,
//     snarkBypassSigner
//   );
//   const balance = await aaContractSnarkBypassSigner.balanceOf(
//     railgunWalletStub.address
//   );
//   console.log("Balance:", ethers.formatUnits(balance, 18));
// };

// // scan();
