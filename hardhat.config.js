require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// import { Network, Alchemy } from 'alchemy-sdk';

// const settings = {
//     apiKey: "wFYRgr9-orFN-pdNzgrgjrwGqXbhK_hT",
//     network: Network.ETH_MAINNET,
// };

// const alchemy = new Alchemy(settings);

// get the latest block
// const latestBlock = alchemy.core.getBlock("latest").then(console.log);

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_key;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.Goerlia_private_key],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/g2owI69k41PLwgnuL_0shlEQrg_jFey3",
      accounts: [process.env.Goerlia_private_key],
    },
  },
};
