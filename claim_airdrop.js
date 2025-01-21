// Import libraries from Solana web3.js
const { Connection, Keypair, LAMPORTS_PER_SOL } = require("@solana/web3.js");

// Replace this with your wallet's secret key (private key)
const walletSecretKey = [26, 107, 240, 213, 80, 234, 133, 194, 46, 202, 119, 36,191, 132, 159, 248, 174, 52, 132, 18, 63, 160, 238, 205, 119, 221, 96, 133, 119,173, 27, 20, 138, 187, 207, 114, 70, 22, 13, 225, 157, 131, 49, 38, 85, 31, 151, 9,229, 69, 30, 200, 240, 103, 6, 213, 88, 212, 204, 30, 243, 162, 75, 72];

// Create a keypair from the wallet's secret key
const keypair = Keypair.fromSecretKey(new Uint8Array(walletSecretKey));

// Create a Solana devnet connection to claim the airdrop
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // Request an airdrop of 2 SOL tokens
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
        
        // Output the transaction hash and explorer link
        console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();
