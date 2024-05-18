import { SuiKit } from '@scallop-io/sui-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';

const secretKey = '<SENDER_PRIVATE_KEY>';

const networkType = 'mainnet';
const fullnodeUrls = [getFullnodeUrl('mainnet')];
const suiKit = new SuiKit({ secretKey, networkType, fullnodeUrls });

const receiver = '0x11d63ca6c7fc7d597a868310f06a4551d4af4fd8bd5ecd7b6322620b41381f30';
const coinUSDT = '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN';
const amount = 200;

await sendCoin(coinUSDT, receiver, amount)

async function sendCoin(coinType, user, amount) {
    await suiKit.transferCoin(user, amount, coinType)
}