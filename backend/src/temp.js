const { Wallet, JsonRpcProvider, Contract, parseUnits } = require("ethers");
const { simpleSwap } = require("./abis/swap");
const { testErc20ABI } = require("./abis/TestERC20");

const liquiditySwap = async () => {
  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const walletSigner = new Wallet("0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6", provider);

  const aa = new Contract("0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB", testErc20ABI, walletSigner);
  const bb = new Contract("0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8", testErc20ABI, walletSigner);
  const reciept1 = await aa.mint("0x172076E0166D1F9Cc711C77Adf8488051744980C", parseUnits("10000", 18))
  await reciept1.wait()
  const reciept2 = await bb.mint("0x172076E0166D1F9Cc711C77Adf8488051744980C", parseUnits("10000", 18))
  await reciept2.wait()
  // const swap = new Contract("0x172076E0166D1F9Cc711C77Adf8488051744980C", simpleSwap, walletSigner);
};

liquiditySwap()
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });
