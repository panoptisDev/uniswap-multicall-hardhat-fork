const { Wallet } = require("ethers");
const { ethers } = require("hardhat");

const provider = new ethers.providers.WebSocketProvider('ws://127.0.0.1:8545');

// Coming from mock node
const myWallet01 = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
);

// Coming from mock node
const myWallet02 = new ethers.Wallet(
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
  provider
);

async function deployContracts() {
  const uniswapV2Contract = await ethers.getContractFactory(
    'UniswapV2Factory',
    myWallet01.address
  );
  const uniswapContractDeploy = await uniswapV2Contract.deploy(myWallet01.address);
  await uniswapContractDeploy.deployed();
  console.log("UniswapV2 contract address: ", uniswapContractDeploy.address);

  const volcanoCoinContract = await ethers.getContractFactory(
    'VolcanoCoin',
    myWallet02
  );
  
  const volcanoCoinContractDeploy = await volcanoCoinContract.deploy();
  await volcanoCoinContractDeploy.deployed();
  console.log("VolcanoCoin contract address: ", volcanoCoinContractDeploy.address);
}

deployContracts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
