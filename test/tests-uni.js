const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const {
  BN,
  constants,
  expectEvent,
  expectRevert,
} = require("@openzeppelin/test-helpers");

describe("Uniswap V2", () => {
  let uniV2Contract;
  let owner, addr, addr2, addr3;

  beforeEach(async () => {
    const UNI = await ethers.getContractFactory("UniswapV2ERC20");
    uniV2Contract = await UNI.deploy();
    await uniV2Contract.deployed();
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
  });

  it("has a name", async () => {
    let contractName = await uniV2Contract.name();
    expect(contractName).to.equal("Uniswap V2");
  });

  it("has a symbol", async () => {
    let contractSymbol = await uniV2Contract.symbol();
    expect(contractSymbol).to.equal('UNI-V2');
  });

  it("has 18 decimals", async () => {
    let contractDecimals = await uniV2Contract.decimals();
    expect(contractDecimals).to.equal(18);
  });
});
