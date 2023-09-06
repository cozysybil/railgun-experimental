export const railgunABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "AddToBlocklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "shieldFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unshieldFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftFee",
        type: "uint256",
      },
    ],
    name: "FeeChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "treeNumber",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "nullifier",
        type: "bytes32[]",
      },
    ],
    name: "Nullified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "RemoveFromBlocklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "treeNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startPosition",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "npk",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenSubID",
                type: "uint256",
              },
            ],
            internalType: "struct TokenData",
            name: "token",
            type: "tuple",
          },
          {
            internalType: "uint120",
            name: "value",
            type: "uint120",
          },
        ],
        indexed: false,
        internalType: "struct CommitmentPreimage[]",
        name: "commitments",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "bytes32[3]",
            name: "encryptedBundle",
            type: "bytes32[3]",
          },
          {
            internalType: "bytes32",
            name: "shieldKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct ShieldCiphertext[]",
        name: "shieldCiphertext",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
    ],
    name: "Shield",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "treeNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "hash",
        type: "bytes32[]",
      },
      {
        components: [
          {
            internalType: "bytes32[4]",
            name: "ciphertext",
            type: "bytes32[4]",
          },
          {
            internalType: "bytes32",
            name: "blindedSenderViewingKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "blindedReceiverViewingKey",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "annotationData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "memo",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct CommitmentCiphertext[]",
        name: "ciphertext",
        type: "tuple[]",
      },
    ],
    name: "Transact",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "TreasuryChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenSubID",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct TokenData",
        name: "token",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Unshield",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifiers",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commitments",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "artifactsIPFSHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "alpha1",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "beta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "gamma2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "delta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point[]",
            name: "ic",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct VerifyingKey",
        name: "verifyingKey",
        type: "tuple",
      },
    ],
    name: "VerifyingKeySet",
    type: "event",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "addToBlocklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vector",
        type: "uint256",
      },
    ],
    name: "addVector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint120",
        name: "_shieldFee",
        type: "uint120",
      },
      {
        internalType: "uint120",
        name: "_unshieldFee",
        type: "uint120",
      },
      {
        internalType: "uint256",
        name: "_nftFee",
        type: "uint256",
      },
    ],
    name: "changeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "changeTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkSafetyVectors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint136",
        name: "_amount",
        type: "uint136",
      },
      {
        internalType: "bool",
        name: "_isInclusive",
        type: "bool",
      },
      {
        internalType: "uint120",
        name: "_feeBP",
        type: "uint120",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint120",
        name: "",
        type: "uint120",
      },
      {
        internalType: "uint120",
        name: "",
        type: "uint120",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newCommitments",
        type: "uint256",
      },
    ],
    name: "getInsertionTreeNumberAndStartingIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenSubID",
            type: "uint256",
          },
        ],
        internalType: "struct TokenData",
        name: "_tokenData",
        type: "tuple",
      },
    ],
    name: "getTokenID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nullifiers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_commitments",
        type: "uint256",
      },
    ],
    name: "getVerificationKey",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "artifactsIPFSHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "alpha1",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "beta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "gamma2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "delta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point[]",
            name: "ic",
            type: "tuple[]",
          },
        ],
        internalType: "struct VerifyingKey",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "treeNumber",
            type: "uint16",
          },
          {
            internalType: "uint72",
            name: "minGasPrice",
            type: "uint72",
          },
          {
            internalType: "enum UnshieldType",
            name: "unshield",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "chainID",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "adaptContract",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "adaptParams",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32[4]",
                name: "ciphertext",
                type: "bytes32[4]",
              },
              {
                internalType: "bytes32",
                name: "blindedSenderViewingKey",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "blindedReceiverViewingKey",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "annotationData",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "memo",
                type: "bytes",
              },
            ],
            internalType: "struct CommitmentCiphertext[]",
            name: "commitmentCiphertext",
            type: "tuple[]",
          },
        ],
        internalType: "struct BoundParams",
        name: "_boundParams",
        type: "tuple",
      },
    ],
    name: "hashBoundParams",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "npk",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenSubID",
                type: "uint256",
              },
            ],
            internalType: "struct TokenData",
            name: "token",
            type: "tuple",
          },
          {
            internalType: "uint120",
            name: "value",
            type: "uint120",
          },
        ],
        internalType: "struct CommitmentPreimage",
        name: "_commitmentPreimage",
        type: "tuple",
      },
    ],
    name: "hashCommitment",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "uint120",
        name: "_shieldFee",
        type: "uint120",
      },
      {
        internalType: "uint120",
        name: "_unshieldFee",
        type: "uint120",
      },
      {
        internalType: "uint256",
        name: "_nftFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initializeRailgunLogic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEventBlock",
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
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newTreeStub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextLeafIndex",
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
    name: "nftFee",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifiers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "removeFromBlocklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vector",
        type: "uint256",
      },
    ],
    name: "removeVector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "rootHistory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treeNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_setting",
        type: "bool",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treeNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_nullifier",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_setting",
        type: "bool",
      },
    ],
    name: "setNullifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nullifiers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_commitments",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "artifactsIPFSHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "alpha1",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "beta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "gamma2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "delta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point[]",
            name: "ic",
            type: "tuple[]",
          },
        ],
        internalType: "struct VerifyingKey",
        name: "_verifyingKey",
        type: "tuple",
      },
    ],
    name: "setVerificationKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "npk",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenSubID",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenData",
                name: "token",
                type: "tuple",
              },
              {
                internalType: "uint120",
                name: "value",
                type: "uint120",
              },
            ],
            internalType: "struct CommitmentPreimage",
            name: "preimage",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32[3]",
                name: "encryptedBundle",
                type: "bytes32[3]",
              },
              {
                internalType: "bytes32",
                name: "shieldKey",
                type: "bytes32",
              },
            ],
            internalType: "struct ShieldCiphertext",
            name: "ciphertext",
            type: "tuple",
          },
        ],
        internalType: "struct ShieldRequest[]",
        name: "_shieldRequests",
        type: "tuple[]",
      },
    ],
    name: "shield",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shieldFee",
    outputs: [
      {
        internalType: "uint120",
        name: "",
        type: "uint120",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "snarkSafetyVector",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "a",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256[2]",
                    name: "x",
                    type: "uint256[2]",
                  },
                  {
                    internalType: "uint256[2]",
                    name: "y",
                    type: "uint256[2]",
                  },
                ],
                internalType: "struct G2Point",
                name: "b",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "c",
                type: "tuple",
              },
            ],
            internalType: "struct SnarkProof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "nullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "commitments",
            type: "bytes32[]",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "treeNumber",
                type: "uint16",
              },
              {
                internalType: "uint72",
                name: "minGasPrice",
                type: "uint72",
              },
              {
                internalType: "enum UnshieldType",
                name: "unshield",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "chainID",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "adaptContract",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "adaptParams",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "bytes32[4]",
                    name: "ciphertext",
                    type: "bytes32[4]",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedSenderViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedReceiverViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes",
                    name: "annotationData",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "memo",
                    type: "bytes",
                  },
                ],
                internalType: "struct CommitmentCiphertext[]",
                name: "commitmentCiphertext",
                type: "tuple[]",
              },
            ],
            internalType: "struct BoundParams",
            name: "boundParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "npk",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenSubID",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenData",
                name: "token",
                type: "tuple",
              },
              {
                internalType: "uint120",
                name: "value",
                type: "uint120",
              },
            ],
            internalType: "struct CommitmentPreimage",
            name: "unshieldPreimage",
            type: "tuple",
          },
        ],
        internalType: "struct Transaction[]",
        name: "_transactions",
        type: "tuple[]",
      },
    ],
    name: "sumCommitments",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenBlocklist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenIDMapping",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenSubID",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "a",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256[2]",
                    name: "x",
                    type: "uint256[2]",
                  },
                  {
                    internalType: "uint256[2]",
                    name: "y",
                    type: "uint256[2]",
                  },
                ],
                internalType: "struct G2Point",
                name: "b",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "c",
                type: "tuple",
              },
            ],
            internalType: "struct SnarkProof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "nullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "commitments",
            type: "bytes32[]",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "treeNumber",
                type: "uint16",
              },
              {
                internalType: "uint72",
                name: "minGasPrice",
                type: "uint72",
              },
              {
                internalType: "enum UnshieldType",
                name: "unshield",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "chainID",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "adaptContract",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "adaptParams",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "bytes32[4]",
                    name: "ciphertext",
                    type: "bytes32[4]",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedSenderViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedReceiverViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes",
                    name: "annotationData",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "memo",
                    type: "bytes",
                  },
                ],
                internalType: "struct CommitmentCiphertext[]",
                name: "commitmentCiphertext",
                type: "tuple[]",
              },
            ],
            internalType: "struct BoundParams",
            name: "boundParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "npk",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenSubID",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenData",
                name: "token",
                type: "tuple",
              },
              {
                internalType: "uint120",
                name: "value",
                type: "uint120",
              },
            ],
            internalType: "struct CommitmentPreimage",
            name: "unshieldPreimage",
            type: "tuple",
          },
        ],
        internalType: "struct Transaction[]",
        name: "_transactions",
        type: "tuple[]",
      },
    ],
    name: "transact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treeNumber",
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
    name: "unshieldFee",
    outputs: [
      {
        internalType: "uint120",
        name: "",
        type: "uint120",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "npk",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenSubID",
                type: "uint256",
              },
            ],
            internalType: "struct TokenData",
            name: "token",
            type: "tuple",
          },
          {
            internalType: "uint120",
            name: "value",
            type: "uint120",
          },
        ],
        internalType: "struct CommitmentPreimage",
        name: "_note",
        type: "tuple",
      },
    ],
    name: "validateCommitmentPreimage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "a",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256[2]",
                    name: "x",
                    type: "uint256[2]",
                  },
                  {
                    internalType: "uint256[2]",
                    name: "y",
                    type: "uint256[2]",
                  },
                ],
                internalType: "struct G2Point",
                name: "b",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "c",
                type: "tuple",
              },
            ],
            internalType: "struct SnarkProof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "nullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "commitments",
            type: "bytes32[]",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "treeNumber",
                type: "uint16",
              },
              {
                internalType: "uint72",
                name: "minGasPrice",
                type: "uint72",
              },
              {
                internalType: "enum UnshieldType",
                name: "unshield",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "chainID",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "adaptContract",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "adaptParams",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "bytes32[4]",
                    name: "ciphertext",
                    type: "bytes32[4]",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedSenderViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedReceiverViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes",
                    name: "annotationData",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "memo",
                    type: "bytes",
                  },
                ],
                internalType: "struct CommitmentCiphertext[]",
                name: "commitmentCiphertext",
                type: "tuple[]",
              },
            ],
            internalType: "struct BoundParams",
            name: "boundParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "npk",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenSubID",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenData",
                name: "token",
                type: "tuple",
              },
              {
                internalType: "uint120",
                name: "value",
                type: "uint120",
              },
            ],
            internalType: "struct CommitmentPreimage",
            name: "unshieldPreimage",
            type: "tuple",
          },
        ],
        internalType: "struct Transaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "validateTransaction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "a",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256[2]",
                    name: "x",
                    type: "uint256[2]",
                  },
                  {
                    internalType: "uint256[2]",
                    name: "y",
                    type: "uint256[2]",
                  },
                ],
                internalType: "struct G2Point",
                name: "b",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "x",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "y",
                    type: "uint256",
                  },
                ],
                internalType: "struct G1Point",
                name: "c",
                type: "tuple",
              },
            ],
            internalType: "struct SnarkProof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "nullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "commitments",
            type: "bytes32[]",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "treeNumber",
                type: "uint16",
              },
              {
                internalType: "uint72",
                name: "minGasPrice",
                type: "uint72",
              },
              {
                internalType: "enum UnshieldType",
                name: "unshield",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "chainID",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "adaptContract",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "adaptParams",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "bytes32[4]",
                    name: "ciphertext",
                    type: "bytes32[4]",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedSenderViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "blindedReceiverViewingKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes",
                    name: "annotationData",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "memo",
                    type: "bytes",
                  },
                ],
                internalType: "struct CommitmentCiphertext[]",
                name: "commitmentCiphertext",
                type: "tuple[]",
              },
            ],
            internalType: "struct BoundParams",
            name: "boundParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "npk",
                type: "bytes32",
              },
              {
                components: [
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenSubID",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenData",
                name: "token",
                type: "tuple",
              },
              {
                internalType: "uint120",
                name: "value",
                type: "uint120",
              },
            ],
            internalType: "struct CommitmentPreimage",
            name: "unshieldPreimage",
            type: "tuple",
          },
        ],
        internalType: "struct Transaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "artifactsIPFSHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "alpha1",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "beta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "gamma2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "delta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point[]",
            name: "ic",
            type: "tuple[]",
          },
        ],
        internalType: "struct VerifyingKey",
        name: "_verifyingKey",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct G2Point",
            name: "b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct G1Point",
            name: "c",
            type: "tuple",
          },
        ],
        internalType: "struct SnarkProof",
        name: "_proof",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "_inputs",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
