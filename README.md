# poly_avax_module_1



This repository contains a codebase for a project built on the Hardhat framework, which is designed to facilitate Ethereum development. Below is an overview of the project and its configuration.

## Prerequisites

Before using this project, you should have the following prerequisites installed:

1. Node.js: Ensure you have Node.js installed on your machine.
2. Package Manager: You will need either npm or yarn installed to manage dependencies.

## Getting Started

1. Clone the repository: Use Git to clone the project to your local machine.

2. Install dependencies: Navigate to the project directory and run the following command to install the necessary dependencies:

```
npm install
```

3. Configuration: The Hardhat configuration file (`hardhat.config.js`) contains network settings and API keys. Make sure to set up the environment variables correctly. Refer to the next section for details.

4. Deploying and Testing: Depending on the project's specific requirements, you may need to deploy smart contracts to the specified networks and test them accordingly. The project may include tasks and scripts to facilitate these actions.

## Configuration

The `hardhat.config.js` file is the main configuration file for this project. It includes settings for Solidity version, networks, and API keys. Below is an explanation of the important parts of the configuration:

### Solidity Version

The `solidity` field specifies the version of Solidity used for compiling the smart contracts in this project. The current version is set to "0.8.17."

### Networks

This section defines the networks you can deploy the smart contracts to. The two networks defined in this project are "mumbai" and "goerli."

- "mumbai": This is a network on the Polygon (Matic) testnet. The URL for this network is "https://rpc-mumbai.maticvigil.com." To deploy contracts or interact with this network, you need to provide the private key associated with the account as an environment variable `Goerlia_private_key`.

- "goerli": This is the Ethereum Goerli testnet. The URL for this network is "https://eth-goerli.g.alchemy.com/v2/g2owI69k41PLwgnuL_0shlEQrg_jFey3." To deploy contracts or interact with this network, you also need to provide the private key associated with the account as an environment variable `Goerlia_private_key`.

### API Key

The `ALCHEMY_API_KEY` variable is used to store the Alchemy API key. However, this variable seems to be commented out in the provided code. Make sure to provide the correct Alchemy API key in case you uncomment and use this part of the code.


1. Clone the repository: Use Git to clone the project to your local machine.

2. Install dependencies: Navigate to the project directory and run the following command to install the necessary dependencies:

```
npm install
```

3. Configuration: Make sure to set up your Hardhat project, including network configurations and contract deployment files.

4. Deploying the NFT Contract: Run the script using the following command:

```
npx hardhat run deploy-nft.js
```

## Deployment Script (`deploy-nft.js`)

The `deploy-nft.js` script is responsible for deploying the NFT contract to the blockchain. It uses the Hardhat framework, which facilitates Ethereum development. The script performs the following steps:

1. Import required libraries: The script imports the necessary libraries, including `hardhat` and `fs` (filesystem).

2. Get the deployer's account: The script uses the `ethers` library to retrieve the deployer's account, which is the Ethereum account used for deploying the NFT contract.

3. Deploy the NFT contract: The script uses the `getContractFactory` method from Hardhat to create an instance of the NFT contract. It then deploys the contract to the blockchain using the `deploy` method.

4. Confirm deployment: After deploying the NFT contract, the script logs the contract's address to the console, confirming a successful deployment.

```
npx hardhat run transfer-erc721.js
```

## ERC721 Token Transfer Script (`transfer-erc721.js`)

The `transfer-erc721.js` script demonstrates how to transfer ERC721 tokens from the Ethereum network to the FxChain network. It performs the following steps:

1. Set up connections: The script sets up a connection to the Goerli testnet using the Alchemy provider and your specified private key.

2. Approve token transfer: The script approves the FxRoot contract (`fxRootAddress`) to transfer ERC721 tokens on behalf of the NFT contract (`nft`).

3. Deposit tokens: The script then deposits the specified ERC721 tokens (defined by their tokenIds) to the FxChain network using the FxRoot contract's `deposit` function.

4. Check Token Balance: The script also retrieves the balance of ERC721 tokens for a specific wallet address on the FxChain network.

## Additional Information

- The script uses the Hardhat framework and the ethers.js library to interact with the Ethereum blockchain.

- Make sure to provide the correct `networkAddress` for the Ethereum Goerli testnet and `fxRootAddress` for the FxChain network.

- Ensure you have the necessary contract artifacts (`MyNFT.sol`) in your project directory. Hardhat will automatically compile the contract before execution.

- Depending on your project's specific requirements, you may need to modify the script to handle different ERC721 token contracts or adjust the transfer logic accordingly.

## Disclaimer

Be cautious when handling private keys and sensitive information. Ensure that you are using the appropriate network for deploying and interacting with contracts.

This README file provides an overview of the transfer script and its usage. For more specific details and customization options, refer to the script's comments and the Hardhat documentation.
