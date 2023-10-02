import { ethers } from "ethers";
// import { railgunABI } from "./helpers/ABI";
// import { MerkleTree } from './helpers/logic/merkletree';
import axios from "axios";
import { aaTokenABI } from "../abi/aaTokenABI";

// const contractAddress = process.env.REACT_APP_RAILGUN_LOGIC || "";
// const contractABI = railgunABI;
// const rpc = process.env.REACT_APP_RPC_URL || "";
// const snarkBypassSigner = process.env.REACT_APP_COIN_DEPLOYER_PRIVATE_KEY || "";

const RALGUN_CONTRACT = "0x3aC005eCF84B510fd3Ff37133c1a641Cd79879b5";

interface Wallet {
  spendingAddress: string;
  viewingAddress: string;
  // Other properties of the wallet object
}

interface ShieldResponse {
  newBalance: string;
  transactionHash: string;
  // Other properties of the wallet object
}
interface NewBalance {
  newBalance: string;
  // Other properties of the wallet object
}

export async function getWallet1PrivateAdress(): Promise<Wallet> {
  const { data } = await axios.get("http://localhost:3010/getWallet1");
  return data;
}

export async function getWallet2PrivateAdress(): Promise<Wallet> {
  const { data } = await axios.get("http://localhost:3010/getWallet2");
  return data;
}

export async function shield(amount: string): Promise<ShieldResponse> {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractWithSigner = new ethers.Contract(
      process.env.REACT_APP_COIN_ADDRESS || "",
      aaTokenABI,
      signer
    );

    const reciept = await contractWithSigner.approve(
      RALGUN_CONTRACT,
      ethers.utils.parseUnits(amount, 18)
    );

    await reciept.wait()

    const response = await axios.post(`http://localhost:3010/shield/${amount}`);
    // const response = await axios.post(
    //   `http://localhost:3010/mockshield/${amount}`
    // );
    // console.log(response.data)
    return {
      newBalance: response?.data?.newBalance || "",
      transactionHash: response?.data?.transactionHash || "",
    };
  } catch (e) {
    console.log(e);
    return {
      newBalance: "",
      transactionHash: "",
    };
  }
  // return data;
}

export async function getZkBalance(): Promise<NewBalance> {
  const response = await axios.get("http://localhost:3010/scan");
  // const response = await axios.get("http://localhost:3010/mockscan");
  return {
    newBalance: response?.data?.newBalance || "",
  };
}
export async function testLogic(): Promise<string> {
  try {
    // const provider = new ethers.providers.JsonRpcProvider(rpc);
    // const signer = new ethers.Wallet(snarkBypassSigner, provider);
    // const contractWithSnarkBtpassSigner = new ethers.Contract(
    //   contractAddress,
    //   contractABI,
    //   signer
    // );

    // const merkletree = await MerkleTree.createTree();
    // const checkLastEventBlock =
    //   await contractWithSnarkBtpassSigner.lastEventBlock();

    // console.log({ checkLastEventBlock });

    //   let contractWithSigner: ethers.Contract;

    //   if (metamask) {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     await provider.send("eth_requestAccounts", []);
    //     const signer = provider.getSigner();
    //     contractWithSigner = new ethers.Contract(
    //       contractAddress,
    //       contractABI,
    //       signer
    //     );
    //   } else {
    //     const provider = new ethers.providers.JsonRpcProvider(rpc);
    //     const signer = new ethers.Wallet(privateKey, provider);
    //     contractWithSigner = new ethers.Contract(
    //       contractAddress,
    //       contractABI,
    //       signer
    //     );
    //   }
    //   const receipt = await contractWithSigner.transfer(
    //     to,
    //     ethers.utils.parseUnits(amount, 18)
    //   );
    //   return receipt.hash;
    return "Hi";
  } catch (error) {
    console.error("Error fetching balance:", error);
    return "Transaction failed";
  }
}
