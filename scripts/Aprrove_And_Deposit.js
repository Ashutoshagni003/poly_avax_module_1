//import c from "contracts/examples/erc721-transfer/FxERC721RootTunnel.sol"// Import necessary packages and contracts
const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require("dotenv").config();

//Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  // Set up connections to network and wallet
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/g2owI69k41PLwgnuL_0shlEQrg_jFey3";
  const privateKey = process.env.Goerlia_private_key;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.attach("0x6351AD099F43Ca7eb09bA25DdFc41c73707ce542");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    await depositTx.wait();
  }

  console.log("Approved and deposited");


const tokenContractinJson = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const tokenABI = tokenContractinJson.abi;
console.log(tokenABI);
const tokenAddress = "0x920cc52d7f48Db2DA91D5A4387494a428A2f52B9";
const walletAddress = "0xb156EB2Be0d0C8793710F6F8C43Ce0A90518e16C";
const tok = await ethers.getContractAt(tokenABI,tokenAddress);
const balance = await tok.balanceOf("0xb156EB2Be0d0C8793710F6F8C43Ce0A90518e16C");

  console.log( "my superHero wallet balance",wallet.address,"is: ",balance.toString());
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });