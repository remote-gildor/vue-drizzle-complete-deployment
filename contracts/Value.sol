// SPDX-License-Identifier: MIT
pragma solidity =0.7.0;

contract Value {
    uint public value = 0;

    event ValueSet(address indexed _from, uint val);

    function getValue() public view returns(uint) {
        return value;
    }

    function setValue(uint _value) public {
        value = _value;

        emit ValueSet(msg.sender, _value);
    }
}
