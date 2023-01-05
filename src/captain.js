import {ethers} from "ethers";
import * as dotenv from 'dotenv'
import dayjs from 'dayjs'

dotenv.config();

// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_TESTNET_URL)
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const address = await wallet.getAddress();
const toAddress = '0x3f6eCe5AF1fbc65024C105A22E359dE95109DAD3'
// date
const targetDate = '2023-01-04 14:57:10'

const send = async () => {
    const walletWithProvider = wallet.connect(provider);
    // prepare transaction
    const tx = {
        to: toAddress,
        value: ethers.utils.parseEther("0.01"),
        gasPrice: ethers.utils.parseUnits('100', 'gwei'),
    }
    const start = new Date().getTime();
    const receipt = await walletWithProvider.sendTransaction(tx);
    await receipt.wait();
    const end = new Date().getTime();
    console.log(`请求耗时: ${end - start} ms`);
    // 打印交易详情
    console.log(receipt);
    console.log(`address: ${address}, 发送后余额: ${ethers.utils.formatEther(await provider.getBalance(address))}`);
    console.log(`toAddress: ${toAddress}, 发送后余额: ${ethers.utils.formatEther(await provider.getBalance(toAddress))}`);
}

const main = async () => {
    console.log('发送ETH')
    console.log(`address: ${address}, 发送前余额: ${ethers.utils.formatEther(await provider.getBalance(address))}`);
    console.log(`toAddress: ${toAddress}, 发送前余额: ${ethers.utils.formatEther(await provider.getBalance(toAddress))}`);

    let timer = setInterval(() => {
        console.log("等待交易中...")
        if (dayjs().unix() >= dayjs(targetDate).unix()) {
            clearInterval(timer);
            console.log('sent...');
            send();
        }
    }, 1000)
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});