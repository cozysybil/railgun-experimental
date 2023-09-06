import { ethers, Contract, Wallet } from "ethers";
import { railgunABI } from "./helpers/ABI";

const contractAddress = process.env.REACT_APP_RAILGUN_LOGIC || "";
const contractABI = railgunABI;
const rpc = process.env.REACT_APP_RPC_URL || "";
const snarkBypassSigner = process.env.REACT_APP_COIN_DEPLOYER_PRIVATE_KEY || "";

export async function testLogic(): Promise<string> {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const signer = new ethers.Wallet(snarkBypassSigner, provider);
    const contractWithSnarkBtpassSigner = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    const checkLastEventBlock =
      await contractWithSnarkBtpassSigner.lastEventBlock();

    console.log({ checkLastEventBlock });

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
