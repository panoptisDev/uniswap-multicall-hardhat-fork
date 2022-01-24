# Homework 14

## How to run this.

1. Start your own ganache node:
```
$ npx ganache-cli --fork https://rinkeby.infura.io/v3/${ID}
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
$ cd interface
$ npm install -g yarn
$ yarn
$ yarn start
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





......

Get tokens from faucet
https://faucets.chain.link/rinkeby

Get tokens from other faucet
https://teller.gitbook.io/teller-1/testing-guide/getting-testnet-tokens-rinkeby



Deploying contracts using 0xae010f0c8Ba3360F2A9D8b035CB07C290f6e01fe
WETH deployed to : 0xCBde346527cd6dBb2B8ce6aFcbf9e5BdeA12FD8d
Factory deployed to : 0xa69E9a242AF23728323a1bF0212E7e852367E807
Router V02 deployed to :  0x66F234E6f341A392aCcE3717dE6C3bcEF8190184
Multicall deployed to : 0xfc9541F8471eB3032d1F118954167733CB1209bD
VolcanoCoin deployed to : 0x64d71B10369A05e24Fd40743Bc6633C2A07531d5




-----


{
    "name": "Menu",
    "keywords": [
        "tokens",
        "uniswap"
    ],
    "timestamp": "2021-05-10T00:00:00+00:00",
    "tokens": [
        {
            "name": "Wrapped Ether",
            "address": "0xCBde346527cd6dBb2B8ce6aFcbf9e5BdeA12FD8d",
            "symbol": "WETH",
            "decimals": 18,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
        },
        {
            "name": "Dai Stablecoin",
            "address": "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
            "symbol": "DAI",
            "decimals": 18,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
        },
        {
            "name": "USDCoin",
            "address": "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
            "symbol": "USDC",
            "decimals": 6,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
        },
        {
            "name": "Curve DAO Token",
            "address": "0xd7eebb39033ed87c72638d962ca0629d90321338",
            "symbol": "CRV",
            "decimals": 18,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png"
        },
        {
            "name": "Uniswap",
            "address": "0x03e6c12ef405ac3f642b9184eded8e1322de1a9e",
            "symbol": "UNI",
            "decimals": 18,
            "chainId": 4,
            "logoURI": "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
        },
        {
            "name": "Tether USD",
            "address": "0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad",
            "symbol": "USDT",
            "decimals": 6,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
        },
        {
            "name": "ChainLink Token",
            "address": "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
            "symbol": "LINK",
            "decimals": 18,
            "chainId": 4,
            "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
        },
        {
            "name": "Vulcano Token",
            "address": "0x3eb60b9bA7FFd6426A0258485856bB7D67994fbf",
            "chainId": 4,
            "symbol": "VLC",
            "decimals": 18,
            "logoURI": "https://ipfs.infura.io/ipfs/QmNWWQEc1jZsSBzv56U5rU3tAht6UHUYF9BQcZgdt5wQcX"
        }
    ],
    "version": {
        "major": 1,
        "minor": 0,
        "patch": 0
    }
}
