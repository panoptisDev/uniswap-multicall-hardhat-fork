const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const {
  BN,
  constants,
  expectEvent,
  expectRevert,
} = require("@openzeppelin/test-helpers");

describe("Volcano Coin", () => {
  let volcanoContract;
  let owner, addr, addr2, addr3;

  beforeEach(async () => {
    const Volcano = await ethers.getContractFactory("VolcanoCoin");
    volcanoContract = await Volcano.deploy();
    await volcanoContract.deployed();
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
  });

  it("has a name", async () => {
    let contractName = await volcanoContract.name();
    expect(contractName).to.equal("Volcano Coin");
  });

  it("reverts when transferring tokens to the zero address", async () => {
    await expectRevert(
      volcanoContract.transfer(constants.ZERO_ADDRESS, 10),
      "ERC20: transfer to the zero address"
    );
  });

  it("has a symbol", async () => {
    let contractSymbol = await volcanoContract.symbol();
    expect(contractSymbol).to.equal('VLC');
  });

  it("has 18 decimals", async () => {
    let contractDecimals = await volcanoContract.decimals();
    expect(contractDecimals).to.equal(18);
  });

  it("assigns initial balance", async () => {
    let ownerInitialBalance = await volcanoContract.balanceOf(owner.address);
    assert.isAbove(ownerInitialBalance, 0);
  });

  it("increases allowance for address1", async () => {
    await volcanoContract.increaseAllowance(addr1.address, 1000);
    let addr1Allowance = await volcanoContract.allowance(
      owner.address,
      addr1.address
    );
    expect(addr1Allowance).to.equal(1000);
  });

  it("decreases allowance for address1", async () => {
    let allowance = 1000;

    // Increase allowance.
    await volcanoContract.increaseAllowance(addr1.address, allowance);
    let addr1Allowance = await volcanoContract.allowance(
      owner.address,
      addr1.address
    );
    expect(addr1Allowance).to.equal(1000);

    // Decrease allowance.
    await volcanoContract.decreaseAllowance(addr1.address, allowance);
    addr1Allowance = await volcanoContract.allowance(
      owner.address,
      addr1.address
    );
    expect(addr1Allowance).to.equal(0);
  });

  it("emits an event when increasing allowance", async () => {
    // increaseAllowance returns an event object
    // https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20-increaseAllowance-address-uint256-
    let contractAllowanceEvent = await volcanoContract.increaseAllowance(
      addr1.address,
      1000
    );
    expect(contractAllowanceEvent).to.be.a("object");
  });

  it("reverts decreaseAllowance when trying decrease below 0", async () => {
    await expectRevert(
      volcanoContract.decreaseAllowance(addr1.address, 1000),
      'ERC20: decreased allowance below zero'
    );
  });

  it("updates balances on successful transfer from owner to addr1", async () => {
    await volcanoContract.increaseAllowance(owner.address, 10);
    await volcanoContract.transferFrom(
      owner.address,
      addr1.address,
      10);
    expect(await volcanoContract.balanceOf(addr1.address), 10);
  });

  it("reverts transfer when sender does not have enough balance", async () => {
    await volcanoContract.increaseAllowance(addr1.address, 10);
    await expectRevert(
      volcanoContract.transferFrom(addr1.address, owner.address, 10),
      'ERC20: transfer amount exceeds balance'
    );
  });

  it("reverts transferFrom addr1 to addr2 called by the owner without setting allowance", async () => {
    await volcanoContract.connect(owner).transfer(addr1.address, 10);
    let addr1Balance = await volcanoContract.balanceOf(addr1.address);

    // Confirm addr1 balance is 10
    expect(addr1Balance).to.equal(10);

    await expectRevert(
      volcanoContract
        .connect(owner)
        .transferFrom(addr1.address, addr2.address, 10),
      'ERC20: transfer amount exceeds allowance'
    );
  });

  it("updates balances after transferFrom addr1 to addr2 called by the owner", async () => {
    await volcanoContract.connect(owner).transfer(addr1.address, 10);
    let addr1Balance = await volcanoContract.balanceOf(addr1.address);

    // Confirm addr1 balance is 10
    expect(addr1Balance).to.equal(10);

    // Allow owner to spend on behalf of addr1
    await volcanoContract.connect(addr1).increaseAllowance(owner.address, 10);

    // Transfer
    await volcanoContract
      .connect(owner)
      .transferFrom(addr1.address, addr2.address, 10);

    // Confirm balances
    addr1Balance = await volcanoContract.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(0);

    let addr2Balance = await volcanoContract.balanceOf(addr2.address);
    expect(addr2Balance).to.equal(10);
  });
});
