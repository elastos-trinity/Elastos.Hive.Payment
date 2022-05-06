require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    elastosmainnet: {
      url: "https://esc.elastos.io/eth",
      accounts: [],
    },
    elastostestnet: {
      url: "https://api-testnet.elastos.io/eth",
      accounts: [],
    },
  },
};
