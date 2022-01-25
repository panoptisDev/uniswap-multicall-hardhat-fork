# Uniswap Fork

* This is an intention to fork UniswapV2 as endgame job for the [Encode Club Avalance Workshop](https://www.encode.club/avalanche-bootcamp)
* Slides can be found [here](https://docs.google.com/presentation/d/1PLeGStAXrbc3KaBQR_I1M8AWKS0tUjsZ-UokP2UHXoE/edit?usp=sharing)

## How to run this.

* Note: This is intended to run on testnet (Rinkeby), make sure you have enough ETH + ERC20 tokens:
```
https://faucets.chain.link/rinkeby
https://teller.gitbook.io/teller-1/testing-guide/getting-testnet-tokens-rinkeby
```

1. Clone the repo

2. cd into the uniswap-contracts and install the packages, then deploy the contracts
```
$ cd uniswap-contracts
$ npm install
```

4. Make sure to change the `privateKeyDev` on the `hardhat.config.js` file to match one of the private keys of your node.

5. Compile and deploy:
```
$ npx hardhat compile
$ npx hardhat run scripts/deploy.js --network rinkeby
```

6. Copy the contracts addresses, i.e.:
```
Deploying contracts using 0xae010f0c8Ba3360F2A9D8b035CB07C290f6e01fe
WETH deployed to : 0xCBde346527cd6dBb2B8ce6aFcbf9e5BdeA12FD8d
Factory deployed to : 0xa69E9a242AF23728323a1bF0212E7e852367E807
Router V02 deployed to :  0x66F234E6f341A392aCcE3717dE6C3bcEF8190184
Multicall deployed to : 0xfc9541F8471eB3032d1F118954167733CB1209bD
VolcanoCoin deployed to : 0x64d71B10369A05e24Fd40743Bc6633C2A07531d5
```

7. cd into the uniswap-interface and install the packages using yarn:
```
$ cd interface
$ npm install -g yarn
$ yarn
```

8. Run it:
``` 
$ yarn start
```

9. Access to it through `http://localhost:3000`

10. In case you are wondering, token's list is [here](https://gist.github.com/mgagliardo/954679e483076e9615c8bae039560943)

## Disclaimer:

All of the smart contracts were extracted from the official [UniswapV2 Core](https://github.com/Uniswap/v2-core) and [Uniswap Interface v3.0.0](https://github.com/Uniswap/interface/tree/v3.0.0) repositories.

## Creators
* Miguel Gagliardo: <migag9@gmail.com>
