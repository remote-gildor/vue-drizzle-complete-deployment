# Vue Drizzle - Complete Deployment

This project shows a complete deployment on a blockchain (a public testnet). The Vue front-end will be uploaded on GitHub Pages.

## TODO

- Deploy the smart contract code to a public testnet (Ropsten/Kovan/Rinkeby/Goerli)
- Deploy the Vue dApp on GH Pages or smth similar

## Install npm packages

Run `npm install` command in both root folder and the `vapp` folder.

## Ganache

Make sure Ganache is running on port **7545**.

## Truffle

Before you start the Vue dApp, you need to migrate smart contracts to the chain: `truffle migrate`.

## Vue dApp

Start the Vue dApp: `npm run serve`.

## Bootstrap

See Vue Bootstrap docs here: https://bootstrap-vue.org/docs/components

## Tests

Libraries `chai` and `@openzeppelin/test-helpers` are used to help you with tests.

See examples of tests [here](https://github.com/remote-gildor/vue-drizzle-crowdsale/blob/master/test/TestCrowdsale.test.js).

## Verify smart contract on Etherscan

- Install this npm tool: https://github.com/rkalis/truffle-plugin-verify 
- Tutorial: https://kalis.me/verify-truffle-smart-contracts-etherscan/ 
