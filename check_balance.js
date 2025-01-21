const { Connection, Keypair, PublicKey } = require("@solana/web3.js");

// Replace this with your wallet's secret key (private key)
const walletSecretKey = [26, 107, 240, 213, 80, 234, 133, 194, 46, 202, 119, 36,191, 132, 159, 248, 174, 52, 132, 18, 63, 160, 238, 205, 119, 221, 96, 133, 119,173, 27, 20, 138, 187, 207, 114, 70, 22, 13, 225, 157, 131, 49, 38, 85, 31, 151, 9,229, 69, 30, 200, 240, 103, 6, 213, 88, 212, 204, 30, 243, 162, 75, 72];

// Create a keypair from the wallet's secret key
const keypair = Keypair.fromSecretKey(new Uint8Array(walletSecretKey));

// Create a Solana devnet connection
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // Fetch the balance of the wallet
        const balance = await connection.getBalance(keypair.publicKey);

        console.log(`Wallet Address: ${keypair.publicKey.toBase58()}`);
        console.log(`Balance: ${balance / 1e9} SOL`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();
