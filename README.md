# Vue Drizzle - Complete Deployment

> NOT COMPLETED YET

This project shows a complete deployment on a blockchain (a public testnet). The Vue front-end will be uploaded on GitHub Pages.

## TODO

- Deploy the Vue dApp on GH Pages or smth similar

## Install npm packages

Run `npm install` command in both root folder and the `vapp` folder.

## Ganache

Make sure Ganache is running on port **7545**.

## Truffle

Before you start the Vue dApp, you need to migrate smart contracts to the chain: `truffle migrate`.

## Deployment to a public chain

```bash
truffle migrate --network goerli
```

If you're getting a `Callback was already called` error, try with the `--skipDryRun` flag:

```bash
truffle migrate --network goerli --skipDryRun
```

This flag can also be set up in `truffle-config.js`.

## Vue dApp

Start the Vue dApp: `npm run serve`.

## Bootstrap

See Vue Bootstrap docs here: https://bootstrap-vue.org/docs/components

## Tests

Libraries `chai` and `@openzeppelin/test-helpers` are used to help you with tests.

See examples of tests [here](https://github.com/remote-gildor/vue-drizzle-crowdsale/blob/master/test/TestCrowdsale.test.js).

## Verify smart contract on Etherscan

- Install this npm tool: https://github.com/rkalis/truffle-plugin-verify 
- Tutorial (you need to create Etherscan API key): https://kalis.me/verify-truffle-smart-contracts-etherscan/ 

```bash
truffle run verify Value --network goerli
```
