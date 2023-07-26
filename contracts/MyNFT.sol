// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable{
    address public owner;
    uint256 public maxQuantity = 5;

    string private prompt ="Some super heroes ready for the battle";
    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/Qmb7L9y2zcQq7VDzSnPqGPBc5xVT3Qkhdv9N4MNrthWq4T/";

    // constructor(string memory name, string memory symbol, string memory initialPrompt) ERC721(name, symbol) {
    //     prompt = initialPrompt;
    // }

    constructor() ERC721("superHeroes", "CRT") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5"
        );
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() public view returns (string memory) {
        return prompt;
    }

    // Add other functions for minting, token metadata, etc.
}
