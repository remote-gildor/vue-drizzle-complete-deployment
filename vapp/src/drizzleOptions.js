import Value from './contracts/Value.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [
    Value
  ],
  events: {
    Value: ['ValueSet']
  },
  polls: {
    accounts: 15000
  }
}

export default options
