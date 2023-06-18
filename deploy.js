const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    //  Linking with any test-block-Chain like ganache
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

    // Create and Connect our wallet with block-chain..
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    // const encryptedKey = fs.readFileSync("./.encryptedKey.json", "utf8");
    // let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    //   encryptedKey,
    //   process.env.PRIVATE_KEY_PASSWORD
    // );
    // wallet = wallet.connect(provider);

    // Upload compilated file .bin, .abi
    const abi = fs.readFileSync("./simpleContract_sol_simple.abi", "utf8")
    const bin = fs.readFileSync("./simpleContract_sol_simple.bin", "utf8")

    // Creates a new instance of a ContractFactory for the contract described by the interface and bytecode initcode.
    const contractFactory = new ethers.ContractFactory(abi, bin, wallet)
    console.log("Deploying Contract, please wait...")
    const contract = await contractFactory.deploy()
    //waiting for adding one block to block-chain...
    const deploymentReceipt = await contract.deploymentTransaction().wait(1)

    // const address = await contract.getAddress();
    // console.log(`Contract Address: ${address}`);
    // console.log("Here is the transaction:")
    //console.log(contract.deploymentTransaction())
    //console.log(contract);

    // Calling contract functions
    let currentFavoriteNumber = await contract.Retrieve()
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
    console.log("Updating favorite number...")
    const transactionResponse = await contract.Store(9)
    const transactionReceipt = await transactionResponse.wait(1)
    currentFavoriteNumber = await contract.Retrieve()
    console.log(`New Favorite Number: ${currentFavoriteNumber}`)
    console.log(transactionReceipt)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
