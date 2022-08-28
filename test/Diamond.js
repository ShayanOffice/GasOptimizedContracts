const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Diamond", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Module = await ethers.getContractFactory("Module");
    const module = await Module.deploy();
    await module.deployed();

    const Diamond = await ethers.getContractFactory("Diamond");
    const diamond = await Diamond.deploy(module.address);
    await diamond.deployed();

    return { diamond, module, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set ", async function () {
      const { diamond, module, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );

      //   console.log(await diamond.getData(0));
      console.log(await diamond.ds(0));
      console.log(await diamond.ds(1));
      await diamond.setD(1, 0);
      //   console.log(await diamond.getDataLength());
      console.log(await diamond.ds(0));
      console.log(await diamond.ds(1));
      await diamond.setD(1, 1);
      console.log(await diamond.ds(0));
      console.log(await diamond.ds(1));
    });
  });
});
