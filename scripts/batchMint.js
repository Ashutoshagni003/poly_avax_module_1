// This script batch mints criceket ERC721A tokens.

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.Goerlia_private_key;

  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/g2owI69k41PLwgnuL_0shlEQrg_jFey3";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x6351AD099F43Ca7eb09bA25DdFc41c73707ce542"
  

  const HeroesNFT = await ethers.getContractFactory("MyNFT", signer);
  const contract = await HeroesNFT.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted All My 5 Superheroes");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });