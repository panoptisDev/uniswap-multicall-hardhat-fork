# Homework 14

## How to run this.

1. Start your own ganache node:
```
$ npx ganache-cli --fork https://mainnet.infura.io/v3/92f997eda2a04bfcb037010436ced7c8 --unlock 0x503828976D22510aad0201ac7EC88293211D23Da
```

2. Clone the repo

3. cd into the uniswap-contracts and install the packages, then deploy the contracts
```
$ cd uniswap-contracts
$ npm install
```

4. Make sure to change the `privateKeyDev` on the `hardhat.config.js` file to match one of the private keys of your node.

5. Copile and deploy:
```
$ npx hardhat compile
$ npx hardhat run scripts/deploy.js --network fork
```

6. cd into the uniswap-interface and install the packages:
```
$ cd uniswap-interface
$ npm install
$ npm start
```

7. Access to it through `http://localhost:3000`

## Run tests

```
npx hardhat test --network fork
```

## TODO:
* Fix Frontend
* Maybe deploy to the AVAX chain? :) 

## Disclaimer:

All of the smart contracts were extracted from the official [UniswapV2 Core](https://github.com/Uniswap/v2-core) and [UniswapV2 Periphery](https://github.com/Uniswap/v2-periphery) repositories.

## Creators
* Miguel Gagliardo: <migag9@gmail.com>
