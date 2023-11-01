const { ethers } = require("ethers");
const { aaTokenABI } = require("./abis/aaTokenAbi");
const testERC20 = {
  address: "0x5844E16bF3d92724Fc32BD3EB889453F8aa11413",
  abi: aaTokenABI,
};
const deployerAndSnarkByPass = {
  publickKey: "0x062E58DE3a38bF11b8d732878b374a52D3d2942d",
  privateKey:
    "0xc72b22da5cd9038d0f3d2e6776b345daa31cd5bc4cca31a82f6deec20d63c7b7",
};

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545/");
const snarkBypassSigner = new ethers.Wallet(
  deployerAndSnarkByPass.privateKey,
  provider
);
const railgunSmartWalletSnarkBypass = new ethers.Contract(
  testERC20.address,
  testERC20.abi,
  snarkBypassSigner
);
const start = async () => {
    const receipt = await railgunSmartWalletSnarkBypass.transfer(
    "0x642Bc47785474A999586BB84272E5C35Df3374b9",
    "639999999999999995"
  );
};

start()
