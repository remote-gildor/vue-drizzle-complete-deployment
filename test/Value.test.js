const { BN, expectEvent } = require('@openzeppelin/test-helpers');

const Value = artifacts.require("Value");

contract("Value", accounts => {
  let instance;

  beforeEach(async () => {
    instance = await Value.deployed();
  });

  describe("Value tests", () => {

    it("shows that initially the value is 0", async () => {
      let result = await instance.getValue();
      assert.equal(result, 0);
    });

    it("sets the value to 1", async () => {
      let result = await instance.setValue(1);

      expectEvent(result, "ValueSet", { val: "1" });
    });

    it("shows that the value is now 1", async () => {
      let result = await instance.getValue();
      assert.equal(BN(result), 1);
    });

  });

});
