import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ['c72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7']
    },
  },
};

export default config;
