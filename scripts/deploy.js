// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { ethers } = require('hardhat');

const toBytes32 = function (string) {
  return ethers.utils.formatBytes32String(string);
}
const fromBytes32 = function (string) {
  return ethers.utils.parseBytes32String(string);
}

const parseUnits = function (number, units) {
  return ethers.utils.parseUnits(number, units || 8);
}

const formatUnits = function (number, units) {
  return ethers.utils.formatUnits(number, units || 8);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const provider = hre.ethers.provider;
  const signer = await provider.getSigner();

  /*
  await hre.ethers.provider.send('hardhat_setNonce', [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x3b"
  ]);
  return;
  */

  // // Local
  const darkOracle = {address: '0xfc69685086C75Dbbb3834a524F9D36ECB8bB1745'};

  const account = await signer.getAddress();
  console.log('account', account);
  console.log('Account balance', formatUnits(await provider.getBalance(account)));

  // Router
  // const Router = await hre.ethers.getContractFactory("Router");
  // const router = await Router.deploy();
  // await router.deployed();
  const router = {address: '0x1ea70A48283252D44F9Da3A8ef2fc44aE233F692'};
  // console.log("Router deployed to:", router.address);

  // Trading
  // const Trading = await hre.ethers.getContractFactory("Trading");
  // const trading = await Trading.deploy();
  // await trading.deployed();
  // console.log("Trading deployed to:", trading.address);

  // Oracle
  const Oracle = await hre.ethers.getContractFactory("Oracle");
  const oracle = await Oracle.deploy();
  await oracle.deployed();
  console.log("Oracle deployed to:", oracle.address);

  // Treasury
  // const Treasury = await hre.ethers.getContractFactory("Treasury");
  // const treasury = await Treasury.deploy();
  // await treasury.deployed();
  // console.log("Treasury deployed to:", treasury.address);

  // // APX, USDC mock tokens (local only)

  // const AlphaX = await hre.ethers.getContractFactory("AlphaX");
  // const apx = await AlphaX.deploy();
  // await apx.deployed();
  
  // // const apx = {address: '0xA1e0F70e41e7b438f69C27adba01BfE1869d2f03'};
  // console.log("apx:", apx.address);
  
  // const USDC = await hre.ethers.getContractFactory("USDC");
  // const usdc = await USDC.deploy();
  // await usdc.deployed();
  
  const usdc = {address: '0x09bd0016ba4e89D9746fc705B40f976aF8E891B7'};
  // console.log("usdc:", usdc.address);
  
  // const tWETH = await hre.ethers.getContractFactory("tWETH");
  // const tETH = await tWETH.deploy();
  // await tETH.deployed();

  const tETH = {address: '0x86006A624149756064d3e7e0B059F294fA476da6'};
  // console.log("tETH:", tETH.address);


  // PoolAPX
  // const PoolAPX = await hre.ethers.getContractFactory("PoolAPX");
  // const poolAPX = await PoolAPX.deploy(apx.address);
  // await poolAPX.deployed();
  // console.log("PoolAPX deployed to:", poolAPX.address);
  // const poolAPX = {address: '0x4D458E888073e38b3fd5756db9Aa0A8A12d51405'}

  // Pools (WETH, USDC)
  // const Pool = await hre.ethers.getContractFactory("Pool");
  
  // const poolETH = await Pool.deploy(tETH.address);
  // await poolETH.deployed();
  // console.log("poolETH deployed to:", poolETH.address);

  // const poolUSDC = await Pool.deploy(usdc.address);
  // await poolUSDC.deployed();
  // console.log("poolUSDC deployed to:", poolUSDC.address);
  
  // Rewards

  // const Rewards = await hre.ethers.getContractFactory("Rewards");

  //Rewards for Pools
  // const poolRewardsETH = await Rewards.deploy(poolETH.address, tETH.address);
  // await poolRewardsETH.deployed();
  // console.log("poolRewardsETH deployed to:", poolRewardsETH.address);

  // const poolRewardsUSDC = await Rewards.deploy(poolUSDC.address, usdc.address);
  // await poolRewardsUSDC.deployed();
  // console.log("poolRewardsUSDC deployed to:", poolRewardsUSDC.address);

  // Rewards for Apx
  // const apxRewardsETH = await Rewards.deploy(poolAPX.address, tETH.address);
  // await apxRewardsETH.deployed();
  // console.log("apxRewardsETH deployed to:", apxRewardsETH.address);

  // const apxRewardsUSDC = await Rewards.deploy(poolAPX.address, usdc.address);
  // await apxRewardsUSDC.deployed();
  // console.log("apxRewardsUSDC deployed to:", apxRewardsUSDC.address);

  // Router setup
  // await router.setContracts(
  //   treasury.address,
  //   trading.address,
  //   poolAPX.address,
  //   oracle.address,
  //   darkOracle.address
  // );
  // console.log('set contracts done')

  // await router.setPool(tETH.address, poolETH.address);
  // console.log('setpool1')
  // await router.setPool(usdc.address, poolUSDC.address);
  // console.log('setpool2')

  // // Fee share setup
  // await router.setPoolShare(tETH.address, 5000);
  // await router.setPoolShare(usdc.address, 5000);
  // console.log("set pool shares");

  // await router.setApxShare(tETH.address, 1000);
  // await router.setApxShare(usdc.address, 1000);
  // console.log("set Apx shares");

  // await router.setPoolRewards(tETH.address, poolRewardsETH.address);
  // await router.setPoolRewards(usdc.address, poolRewardsUSDC.address);

  // await router.setApxRewards(tETH.address, apxRewardsETH.address);
  // await router.setApxRewards(usdc.address, apxRewardsUSDC.address);
  
  // console.log("Setup router contracts");

  // await router.setCurrencies([tETH.address, usdc.address]);
  // console.log("Setup router currencies");

  // // Link contracts with Router, which also sets their dependent contract addresses
  // await trading.setRouter(router.address);
  // await treasury.setRouter(router.address);
  // await poolAPX.setRouter(router.address);
  await oracle.setRouter(router.address);
  // await poolETH.setRouter(router.address);
  // await poolUSDC.setRouter(router.address);
  // await poolRewardsETH.setRouter(router.address);
  // await poolRewardsUSDC.setRouter(router.address);
  // await apxRewardsETH.setRouter(router.address);
  // await apxRewardsUSDC.setRouter(router.address);

  // console.log("Linked router with contracts");

  // const network = hre.network.name;
  // console.log('network', network);

  // // Add products

  // const products = [
  //   {
  //     id: 'ETH-USD',
  //     maxLeverage: 50,
  //     fee: 0,
  //     interest: 16,
  //     liquidationThreshold: 80
  //   },
  //   {
  //     id: 'BTC-USD',
  //     maxLeverage: 50,
  //     fee: 0,
  //     interest: 16,
  //     liquidationThreshold: 80
  //   }
  // ];

  // for (const p of products) {
  //   await trading.addProduct(toBytes32(p.id), [
  //     parseUnits(""+p.maxLeverage),
  //     parseInt(p.liquidationThreshold * 100),
  //     parseInt(p.fee * 10000),
  //     parseInt(p.interest * 10000000000),
  //   ]);
  //   console.log('Added product ' + p.id);
  // }

  //Approve to apx reward
  // await usdc.approve('0x1c0b2180E030c401c7943118215C88BCC549eFf5', parseUnits("10000000000", 18))
  // await tETH.approve('0x1c0b2180E030c401c7943118215C88BCC549eFf5', parseUnits("10000000000", 18))

  // // Mint some APX, USDC
  // await usdc.mint(parseUnits("100000", 6));
  // await apx.mint(parseUnits("1000", 18));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
