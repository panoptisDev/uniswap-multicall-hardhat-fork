require('@nomiclabs/hardhat-ethers');

const privateKey = process.env.PRIVKEY;
// Change private keys accordingly to ganache-cli
const privateKeyDev = '0x563689b667ba20ca938734e764626c2dfd9b4f96300cf81b6ac82230a1f7be3e';

// WARNING: Real Testnet stuff here
const rinkebyPrivateKey = '';
const ALCHEMY_API_KEY = '';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},
      fork: {
         url: 'http://127.0.0.1:8545',
         accounts: [privateKeyDev],
      },
      rinkeby: {
         url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
         accounts: [rinkebyPrivateKey]
      }
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
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
