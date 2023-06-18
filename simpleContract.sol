// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract simple {
    uint public my_number;

    constructor() {
        my_number = 0;
    }

    function Store(uint x) public {
        my_number += x;
    }

    function Retrieve() public view returns (uint) {
        return my_number;
    }
}
