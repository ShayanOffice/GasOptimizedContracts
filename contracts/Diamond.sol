// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.4;
import {dataStruct} from "./LibData.sol";

contract Diamond {
    dataStruct[100] public ds;
    address public moduleAddress;

    constructor(address _moduleAddr) {
        moduleAddress = _moduleAddr;
    }

    function setD(uint256 _data, uint256 id) external {
        (bool success, bytes memory data) = moduleAddress.delegatecall(
            abi.encodeWithSignature("setData(uint256,uint256)", _data, id)
        );
    }

    function getDataLength() external view returns (uint256) {
        return ds.length;
    }

    function getData(uint256 id) external view returns (uint256) {
        return ds[id].digit;
    }
}
