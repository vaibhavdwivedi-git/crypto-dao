require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_HTTP_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// FakeNFTMarketplace deployed to:  0xe2a11062Bd41d450279d45cE54071028899c4FCc

//CryptoDevsDAO deployed to: 0x2394b420c1815020e8ee8673Ea552D5d86f1399d
