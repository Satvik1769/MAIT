const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  console.log("Deploying");
  const lockContract = await ethers.getContractFactory("Lock");

  console.log(lockContract);

  const lockFactory = await lockContract.deploy();
  console.log(`Contract deployed to ${lockFactory.target}`);

  const transactionResponse = await lockFactory.storeDocument(
    "cause I am already high enough"
  );
  await transactionResponse.wait();

  const resultResponse = await lockFactory.retrieveDocument();
  console.log(resultResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
