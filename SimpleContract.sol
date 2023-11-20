// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleContract {

    uint256 public num;

    event NumSet(uint256 _num, string _msg);

    function increaseNum() public {
        num++;
        emit NumSet(num, "num increased");
    }
}