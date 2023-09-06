import { ethers, Contract, Wallet } from "ethers";

// Define the contract address and ABI
const contractAddress = process.env.REACT_APP_COIN_ADDRESS || "";
const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Create a provider to connect to the Ethereum network
const rpc = process.env.REACT_APP_RPC_URL || "";

// Function to get balance
export async function getBalance(address: string): Promise<string> {
  if (
    contractAddress.length === 0 ||
    rpc.length === 0 ||
    address.length === 0
  ) {
    return "0";
  }
  try {
    const provider = new ethers.JsonRpcProvider(rpc);
    // const provider = new ethers.providers.JsonRpcProvider(rpc);
    const signer = await provider.getSigner();
    // Connect to the contract
    const contractWithSigner = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    const balance = await contractWithSigner.balanceOf(address);
    console.log("Balance:", balance.toString());
    return ethers.formatEther(balance);
  } catch (error) {
    console.error("Error fetching balance:", error);
    return "0";
  }
}

// Function to mint coins
export async function mint(to: string, amount: string): Promise<void> {
  // Assuming the contract method name is "mint"
    const provider = new ethers.JsonRpcProvider(rpc);
  const signer = await provider.getSigner();
  const contractWithSigner = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  await contractWithSigner.mint(to, ethers.parseUnits(amount, 18));
}

// // Function to transfer coins
export async function transfer(
  metamask: boolean,
  privateKey: string,
  to: string,
  amount: string
): Promise<string> {
  try {
    let contractWithSigner: ethers.Contract;

    if (metamask) {
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      contractWithSigner = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    } else {
      const provider = new ethers.JsonRpcProvider(rpc);
      const signer = new ethers.Wallet(privateKey, provider);
      contractWithSigner = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    }
    const receipt = await contractWithSigner.transfer(
      to,
      ethers.parseUnits(amount, 18)
    );
    return receipt.hash;
  } catch (error) {
    console.error("Error fetching balance:", error);
    return "Transaction failed";
  }
}
