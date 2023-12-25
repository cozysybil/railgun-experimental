const simpleSwap = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_from",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rateBP",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
module.exports = { simpleSwap };
