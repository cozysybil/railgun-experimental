import { ethers } from "ethers";
// import { railgunABI } from "./helpers/ABI";
// import { MerkleTree } from './helpers/logic/merkletree';
import axios from "axios";
import { aaTokenABI } from "../abi/aaTokenABI";
import { testErc20ABI } from "../abi/TestERC20";
import { Currency } from "./coin";

// const contractAddress = process.env.REACT_APP_RAILGUN_LOGIC || "";
// const contractABI = railgunABI;
// const rpc = process.env.REACT_APP_RPC_URL || "";
// const snarkBypassSigner = process.env.REACT_APP_COIN_DEPLOYER_PRIVATE_KEY || "";

const RALGUN_CONTRACT = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";

interface Wallet {
  railgunAddress: string;
  id: string;
}

interface ShieldResponse {
  transactionHash: string;
}
interface NewBalance {
  newBalance: string;
  // Other properties of the wallet object
}

export async function getWallet1PrivateAdress(): Promise<Wallet> {
  // const { data } = await axios.get("http://localhost:3010/getWallet1");
  const { data } = await axios.get("http://localhost:3010/api/v2/getWallet1");
  return data;
  // return {
  //   spendingAddress: "",
  //   viewingAddress: "",
  // };
}

export async function getWallet2PrivateAdress(): Promise<Wallet> {
  // const { data } = await axios.get("http://localhost:3010/getWallet2");
  const { data } = await axios.get("http://localhost:3010/api/v2/getWallet2");
  return data;
  // return {
  //   spendingAddress: "",
  //   viewingAddress: "",
  // };
}

export async function shield(
  amount: string,
  railgunAddress: string,
  currency: Currency
): Promise<ShieldResponse> {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractWithSigner = new ethers.Contract(
      currency,
      testErc20ABI,
      signer
    );
    const reciept = await contractWithSigner.approve(
      RALGUN_CONTRACT,
      ethers.utils.parseUnits(amount, 18)
    );
    await reciept.wait();

    let api;
    if (currency === Currency.AA) {
      api = "http://localhost:3010/api/v2/shield/AA";
    } else {
      api = "http://localhost:3010/api/v2/shield/BB";
    }

    const response = await axios.post(api, {
      amountInDecimal: amount,
      railgunAddress,
    });

    return {
      transactionHash: response?.data?.transactionHash,
    };
  } catch (e) {
    console.log(e);
    return {
      transactionHash: "",
    };
  }
}

export async function unshield(
  amount: string,
  id: string,
  currency: Currency
): Promise<ShieldResponse> {
  try {
    let api;
    if (currency === Currency.AA) {
      api = "http://localhost:3010/api/v2/unshield/AA";
    } else {
      api = "http://localhost:3010/api/v2/unshield/BB";
    }

    const response = await axios.post(api, {
      amountInDecimal: amount,
      id,
    });

    return {
      transactionHash: response?.data?.transactionHash,
    };
  } catch (e) {
    console.log(e);
    return {
      transactionHash: "",
    };
  }
}

export async function privateTransfer(
  amount: string,
  id: string,
  to: string,
  currency: Currency
): Promise<ShieldResponse> {
  try {
    let api;
    if (currency === Currency.AA) {
      api = "http://localhost:3010/api/v2/transfer/AA";
    } else {
      api = "http://localhost:3010/api/v2/transfer/BB";
    }

    const response = await axios.post(api, {
      amountInDecimal: amount,
      id,
      to,
    });

    return {
      transactionHash: response?.data?.transactionHash,
    };
  } catch (e) {
    console.log(e);
    return {
      transactionHash: "",
    };
  }
}

export async function getZkBalance(): Promise<NewBalance> {
  // const response = await axios.get("http://localhost:3010/scan");
  // const response = await axios.get("http://localhost:3010/mockscan");
  return {
    // newBalance: response?.data?.newBalance || "",
    newBalance: "",
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

// sell, amount, buy, id
export async function swap(
  sell: Currency,
  buy: Currency,
  amount: string,
  id: string,
  zkWallet: string
): Promise<ShieldResponse> {
  console.log("===========================");
  console.log(sell);
  console.log(buy);
  console.log(amount);
  console.log(id);
  console.log("===========================");

  try {
    const response = await axios.post("http://localhost:3010/api/V2/swap", {
      sell,
      buy,
      amount,
      id,
      zkWallet,
    });

    return {
      transactionHash: response?.data?.transactionHash,
    };
  } catch (error) {
    console.error("Error from test swap:", error);
    return {
      transactionHash: "",
    };
  }
}
