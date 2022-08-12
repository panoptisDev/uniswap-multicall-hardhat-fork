require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');


const privateKey = process.env.PRIVKEY;
// Change private keys accordingly to ganache-cli
const privateKeyDev = '0x563689b667ba20ca938734e764626c2dfd9b4f96300cf81b6ac82230a1f7be3e';

// WARNING: Real Testnet stuff here
const rinkebyPrivateKey = '0x563689b667ba20ca938734e764626c2dfd9b4f96300cf81b6ac82230a1f7be3e';
const ALCHEMY_API_KEY = '7P73VSFYP49UDHTQCMP6PSE9GQ2KBV49Q6';

module.exports = {
   defaultNetwork: 'hardhat',
   etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: '4WD9AQ7TUBJ6IU7EFEY8R4BA69CS7FTFND',
  },

   networks: {
      hardhat: {},
      fork: {
         url: 'http://127.0.0.1:8545',
         accounts: [privateKeyDev],
      },
      rinkeby: {
         url: `https://rpc.slock.it/goerli${ALCHEMY_API_KEY}`,
         accounts: [rinkebyPrivateKey]
      },
      bsc: {
         url: "https://data-seed-prebsc-1-s1.binance.org:8545",
         chainId: 97,
         accounts:
         process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
      matic: {
         url: 'https://rpc-mainnet.maticvigil.com',
         accounts:
         process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
         chainId: 137,
         live: true,
         gasPrice: 600000000000, // 600Gwei
   
         gasMultiplier: 2,
         saveDeployments: true,
       },
       mumbai: {
         url: 'https://matic-testnet-archive-rpc.bwarelabs.com',
         accounts: [rinkebyPrivateKey],
         chainId: 80001,
         live: true,
         saveDeployments: true,
         tags: ['staging'],
         gas: 12000000,
         timeout: 1800000,
         gasPrice: 42000000000,
         allowUnlimitedContractSize: true,
         blockGasLimit: 0x1fffffffffffff,
       },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 9999,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 9999,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
     
};
