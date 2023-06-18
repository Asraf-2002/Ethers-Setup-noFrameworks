# Smart contract deployment with no frameWork

1. Initialize your project in any Empty folder:
    * > `yarn init` [feel free to use npm & npx]

2. Now your project folder is ready, So it's time to install solidity compiler in our project:
    * > `yarn add solc@0.8.7-fixed` [It's good a practice to download every package locally]

3. Create solidity file in your project folder and then compile it: 
    * > ` yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . simpleContract.sol`
    * > You can store it in `package.json` in `scripts` section to make compilation easy using CLI.
    * > After compilation two file will be genarated `.abi` & `.bin`
    * > Use the --base-path and --include-path options to describe the layout of your project. --base-path represents the root of your own source tree while --include-path allows you to specify extra locations containing external code (e.g. libraries installed with a package manager).

4. Now, It's time to deploy your contract in blockChain:
    * > To do so, You need to create first `deploy.js` file.
    * > In `deploy.js` need to connect to any test-blockChain like `Ganache`.  [Ethers](https://docs.ethers.org/v5/getting-started/#importing)
    * > Now run : `yarn add fx-extra`.This package need for uploading `.bin` & `.abi` file in `deploy.js`. 
    * > Now run : `yarn add dotenv`.This package for keeping        sensational information securely.
    * > After finishing everything run : `node deploy.js`.

5. Troubleshooting: Choose the function according to your ethers version

Additional Reference : [___Link___](https://github.com/PatrickAlphaC/ethers-simple-storage-fcc/blob/main/README.md)