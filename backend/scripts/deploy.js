const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNFTMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNFTMarketplace.deployed();
  console.log("FakeNFTMarketplace deployed to: ", fakeNFTMarketplace.address);

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNFTMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    { value: ethers.utils.parseEther("0.1") }
  );

  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to:", cryptoDevsDAO.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
