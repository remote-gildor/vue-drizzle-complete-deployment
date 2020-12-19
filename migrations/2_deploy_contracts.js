const Value = artifacts.require("Value");

module.exports = function(deployer) {
  deployer.deploy(Value);
};
