// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    mapping(address => string) hashCode;
    string private documentHash;

    function storeDocument(string memory _documentHash) public {
        hashCode[msg.sender] = _documentHash;
        documentHash = _documentHash;
    }

    function retrieveDocument() public view returns (string memory) {
        return documentHash;
    }
}
