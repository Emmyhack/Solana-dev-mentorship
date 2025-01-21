// This code is designed to assist you understand the concept of solana wallet functionality

import { Keypair, PublicKey } from '@solana/web3.js';

// Generate a new Solana wallet (keypair)
const wallet = Keypair.generate();
console.log("Loading new wallet...");

console.log(`You've generated a new Solana wallet: ${wallet.publicKey.toBase58()}

To save your wallet, copy and paste the following into dev-wallet.json file:

[${wallet.secretKey}]`)

// run the following command to get the required file
// > touch dev-wallet.json
console.log("run > 'touch dev-wallet.json' in your terminal to create the json file");


// [26,107,240,...162,75,72]
// ALZN39CyyqkgjJEyLBt9rhvepG2VrWiTMVsXms6JbLRm