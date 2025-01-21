// This illustrates how to claim airdrop of Devnet SOL for your newly created wallet in generate_wallet.ts
// The fake money will be used to pay for transactions

// 1: we import libraries from solana web3js
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"

// fetch the wallet we created 
import wallet from "../dev-wallet.json"

// 2: we create a keypair from our wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to claim 2 devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // Then finally send the transaction for 2 SOL tokens
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Success! Check out your TX here: 
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();

// https://explorer.solana.com/tx/4MfKHMDRVKxHizYzvfAdbtQkp1DhbH7cYEQXAZDsa8YqN7DLgdMeTbz3b9Z5ApkERuKB7CoTiVJvn7oQYSoocEs4?cluster=devnet