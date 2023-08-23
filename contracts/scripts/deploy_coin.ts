import { ethers } from "hardhat";

async function main() {
  const lock = await ethers.deployContract("Coin");

  await lock.waitForDeployment();

  console.log(
    `Coin deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
