require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = [process.env.PRIVATE_KEYS];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `http://127.0.0.1:5001`, // Your local IPFS API endpoint
          0, // Index of the account to use (default = 0)
          10, // Number of accounts derived (default = 10)
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4,
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./components/build/contracts",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
