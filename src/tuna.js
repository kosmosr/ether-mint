import {ethers} from "ethers";
import {abi, address} from './utils/tuna-util.js'
import * as dotenv from 'dotenv'

dotenv.config();

console.log(process.env.PRIVATE_KEY)
// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_TESTNET_URL)
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const main = async () => {
    // can write contract
    const contract = new ethers.Contract(address, abi, wallet);

    let {og, koiplus, wl, pub} = await contract.callStatic.isMintLive();
    let gas = await contract.estimateGas.isMintLive();
    console.log(`og: ${og}, koiplus: ${koiplus}, wl: ${wl}, pub: ${pub}`);
    console.log(`estimate gas: ${gas} `)
  /*  let tx = await contractTuna.callStatic.wlMint(1, [""],
        {value: ethers.utils.parseEther('0.03'), gasLimit: 150000
            // , gasPrice: ethers.utils.parseUnits('100', 'gwei')
        }
    )*/
    // console.log(tx);
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});

