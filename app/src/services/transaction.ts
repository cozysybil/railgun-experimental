import { ethers, Contract, Wallet } from "ethers";

// Create a provider to connect to the Ethereum network
const rpc = process.env.REACT_APP_RPC_URL || "";
const provider = new ethers.providers.JsonRpcProvider(rpc);

export async function getTransactionDetails(
  transactionHash: string
): Promise<string> {
  try {
    const transactionReceipt = await provider.getTransactionReceipt(
      transactionHash
    );
    console.log(transactionReceipt);

    if (transactionReceipt) {
      return JSON.stringify(transactionReceipt, null, 2); // Convert to JSON string
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error fetching transaction details:", error);
    return "";
  }
}
