import { ethers, Contract, Wallet, FallbackProvider } from "ethers";
// import artifacts from './test-artifacts-lite';
// import engine from "@railgun-community/engine";
import { ArtifactGetter, PublicInputs, RailgunEngine } from "@railgun-community/engine";

export async function testLogic(): Promise<void> {
  const bPrivateKey = process.env.REACT_APP_B_PRIVATE_KEY || "";
  // v5
  // const bPrivateKeyUI8Ar = ethers.utils.arrayify(bPrivateKey);
  // v6
  const bPrivateKeyUI8Ar = ethers.getBytes(bPrivateKey);

  // const engine = new RailgunEngine(
  //   'MyWalletName',
  //   memdown(),
  //   artifactsGetter,
  //   undefined, // quickSync
  //   undefined, // engineDebugger
  //   undefined, // skipMerkletreeScans
  // );

  // console.log(engine);
  
//   const bPublicSpendingKeyUI8Ar = engine.getPublicSpendingKey(bPrivateKeyUI8Ar);
//   console.log({bPublicSpendingKeyUI8Ar});
}

export {};

// import { ethers } from "ethers";
// import {
//   loadFixture,
//   setBalance,
//   impersonateAccount,
// } from "@nomicfoundation/hardhat-network-helpers";

// import { MerkleTree } from "../railgun/helpers/logic/merkletree";
// import { Wallet } from "../railgun/helpers/logic/wallet";
// import { loadAvailableArtifacts } from '../railgun/helpers/logic/artifacts';
// import {
//   getTokenID,
//   Note,
//   TokenData,
//   TokenType,
// } from "../railgun/helpers/logic/note";
// import {
//   dummyTransact,
//   getFee,
//   padWithDummyNotes,
//   UnshieldType,
// } from "../railgun/helpers/logic/transaction";
// import { arrayToHexString } from "../railgun/helpers/global/bytes";
// import { railgunABI } from "../abi/railgunABI";
// import { randomBytes } from '../railgun/helpers/global/crypto';

// // Define the contract address and ABI
// const railgunLogicContractAddress = process.env.REACT_APP_RAILGUN_LOGIC || "";
// const railgunLogicContractABI = railgunABI

// export async function testLogic(): Promise<void> {
//   // Connect to an Ethereum node
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.REACT_APP_RPC_URL
//   );

//   // Ethereum address for which you want to get the balance
//   const address = "0x000000000000000000000000000000000000dEaD";

//   // Get the balance
//   const balanceWei = await provider.getBalance(address);

//   // Convert balance from Wei to Ether
//   const balanceEther = ethers.utils.formatEther(balanceWei);

//   console.log(`Balance of ${address}: ${balanceEther} ETH`);

//   const snarkBypassSigner = new ethers.Wallet(
//     process.env.REACT_APP_COIN_DEPLOYER_PRIVATE_KEY || "",
//     provider
//   );

//   const adminSigner = new ethers.Wallet(
//     process.env.REACT_APP_ADMIN_PRIVATE_KEY || "",
//     provider
//   );

//   const railgunSmartWalletSnarkBypass = new ethers.Contract(
//     railgunLogicContractAddress,
//     railgunLogicContractABI,
//     snarkBypassSigner
//   );

//   // Create merkle tree and wallets
// //   const merkletree = await MerkleTree.createTree();

// //   const wallet1SpendingKey = randomBytes(32)
// //   const wallet1ViewingKey = randomBytes(32)
// //   const wallet2SpendingKey = randomBytes(32)
// //   const wallet2ViewingKey = randomBytes(32)

// //   const wallet1 = new Wallet(wallet1SpendingKey, wallet1ViewingKey); // spendingKey, ViewingKey
// //   const wallet2 = new Wallet(wallet2SpendingKey, wallet2ViewingKey); // spendingKey, ViewingKey

// //   console.log({wallet1SpendingKey});
// //   console.log({wallet1ViewingKey});
// //   console.log({wallet2SpendingKey});
// //   console.log({wallet2ViewingKey});

//   // Shield notes
// //   const tokenData: TokenData = {
// //     tokenType: TokenType.ERC20,
// //     tokenAddress: testERC20.address,
// //     tokenSubID: 0n,
// //   };

// }
