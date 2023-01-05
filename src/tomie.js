import {ethers} from "ethers";
import * as dotenv from 'dotenv'

dotenv.config();

// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_TESTNET_URL)

let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const abi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
}, {"inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error"}, {
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error"}, {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "MintZeroQuantity", "type": "error"}, {
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
}, {"inputs": [], "name": "OwnershipNotInitializedForExtraData", "type": "error"}, {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
}, {"inputs": [], "name": "TransferFromIncorrectOwner", "type": "error"}, {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
}, {"inputs": [], "name": "TransferToZeroAddress", "type": "error"}, {
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "uint256",
        "name": "fromTokenId",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256"}, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}],
    "name": "ConsecutiveTransfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }, {
        "components": [{
            "internalType": "address payable",
            "name": "account",
            "type": "address"
        }, {"internalType": "uint96", "name": "value", "type": "uint96"}],
        "indexed": false,
        "internalType": "struct LibPart.Part[]",
        "name": "royalties",
        "type": "tuple[]"
    }],
    "name": "RoyaltiesSet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [],
    "name": "_INTERFACE_ID_ERC2981",
    "outputs": [{"internalType": "bytes4", "name": "", "type": "bytes4"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }], "name": "approve", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "defaultPercentageBasisPoints",
    "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "defaultRoyaltiesReceipientAddress",
    "outputs": [{"internalType": "address payable", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "addr", "type": "address"}],
    "name": "deleteWL",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract IERC20", "name": "token", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }], "name": "forwardERC20s", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "getApproved",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "getRaribleV2Royalties",
    "outputs": [{
        "components": [{
            "internalType": "address payable",
            "name": "account",
            "type": "address"
        }, {"internalType": "uint96", "name": "value", "type": "uint96"}],
        "internalType": "struct LibPart.Part[]",
        "name": "",
        "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_address", "type": "address"}],
    "name": "getWL",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getWLCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "ownerOf",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "privateMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "privateMintPrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "privateMinted",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "publicMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "publicMintPrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address[]", "name": "list", "type": "address[]"}, {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
    }], "name": "pushMultiWLSpecifyNum", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "revealed",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_salePrice",
        "type": "uint256"
    }],
    "name": "royaltyInfo",
    "outputs": [{"internalType": "address", "name": "receiver", "type": "address"}, {
        "internalType": "uint256",
        "name": "royaltyAmount",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
    }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "afterTokenPath_", "type": "string"}],
    "name": "setAfterURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "beforeTokenURI_", "type": "string"}],
    "name": "setBeforeURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint96", "name": "_defaultPercentageBasisPoints", "type": "uint96"}],
    "name": "setDefaultPercentageBasisPoints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address payable", "name": "_defaultRoyaltiesReceipientAddress", "type": "address"}],
    "name": "setDefaultRoyaltiesReceipientAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newPrice", "type": "uint256"}],
    "name": "setPrivateMintPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newPrice", "type": "uint256"}],
    "name": "setPublicMintPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bool", "name": "bool_", "type": "bool"}],
    "name": "setReveal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bool", "name": "bool_", "type": "bool"}],
    "name": "setStartPrivateSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bool", "name": "bool_", "type": "bool"}],
    "name": "setStartPublicSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "startPrivateSale",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "startPublicSale",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tokenAmount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "addr", "type": "address"}, {
        "internalType": "uint256",
        "name": "maxMint",
        "type": "uint256"
    }], "name": "upsertWL", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "whiteLists",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "name": "withdrawETH", "outputs": [], "stateMutability": "nonpayable", "type": "function"}];
const addressTomie = '0x11F8a67716f2BEc393763d1e2a1cC6Cc01164D24';
const contractTomie = new ethers.Contract(addressTomie, abi, provider);


async function getStartStatus() {
    return await contractTomie.callStatic.startPublicSale()
}

const main = async () => {
    let result = await getStartStatus();
    console.log(`startPublicSale: ${result}`);
    while (!result) {
        setTimeout(() => {
        }, 2000)
        result = await getStartStatus();
        console.log(`startPublicSale: ${result}, time: ${new Date()}`);
    }
    if (result) {
        let contract = contractTomie.connect(wallet);
        let tx = await contract.publicMint(1, {
            value: ethers.utils.parseEther('0.07'),
            gasLimit: 150000,
            gasPrice: ethers.utils.parseUnits('50', 'gwei')
        });
        console.log(`tx: ${tx.hash}`);
        await tx.wait();
    }
}

main()