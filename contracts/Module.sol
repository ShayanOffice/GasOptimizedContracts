// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.4;
import {dataStruct} from "./LibData.sol";

contract Module {
    dataStruct[100] ds;

    // constructor() {}

    function setData(uint256 _data, uint256 id) external {
        ds[id] = dataStruct(_data);
    }
}
