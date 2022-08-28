require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
const { ETHERSCAN_KEY, RINKEBY_RPC_URL, GOERLI_RPC_URL, WALLET_PRIVATE_KEY } =
  process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 1,
    //   },
    // },
  },
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
