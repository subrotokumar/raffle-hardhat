const { ethers } = require("ethers")

const networkConfig = {
    default: {
        name: "hardhat",
        interval: "30",
    },
    31337: {
        name: "localhost",
        subscriptionId: "588",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        interval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.1 ETH
        callbackGasLimit: "500000", // 500,000 gas
    },
    81: {
        name: "goerli",
        subscriptionId: "6721",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // 30 gwei Key Hash
        interval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        callbackGasLimit: "500000",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    },
    80001: {
        name: "polygonMumbai",
        subscriptionId: "2296",
        vrfCoordinatorV2: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        raffleEntranceFee: ethers.utils.parseEther("0.001"), // 0.1 eth
        gasLane: "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f", // 500 gwei Key Hash
        callbackGasLimit: "500000",
        interval: "60",
    },
    1: {
        name: "mainnet",
        interval: "30",
    },
}

const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const developmentChains = ["hardhat", "localhost"]
const frontEndContractsFile = "./constants/contractAddresses.json"
const frontEndAbiFile = "./constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    frontEndContractsFile,
    frontEndAbiFile,
}
