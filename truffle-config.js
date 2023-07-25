const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['ab3ca80f20fe7d8aabdaa3be6fcbfc1ec8e1de67d9e10d544341ed3af1a32673'],
  providerOrUrl: 'https://goerli.infura.io/v3/2ff47e51ff1f4804865ba892c7efc70c'
});

module.exports = {
  networks: {
    development: {
      provider: () => provider,
      network_id: "5"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
