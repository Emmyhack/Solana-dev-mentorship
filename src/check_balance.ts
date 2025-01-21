import { Connection, PublicKey } from '@solana/web3.js';

async function checkSolanaBalance(walletAddress: string) {
  // Connect to the Solana testnet (you can use mainnet or devnet)
  const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

  try {
    // Convert the wallet address string to a PublicKey object
    const publicKey = new PublicKey(walletAddress);

    // Get the balance for the wallet
    const balance = await connection.getBalance(publicKey);

    // Convert the balance to SOL (since it's returned in lamports, 1 SOL = 1 billion lamports)
    const balanceInSOL = balance / 1e9;

    console.log(`Wallet Address: ${walletAddress}`);
    console.log(`Balance: ${balanceInSOL} SOL`);
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}

// Example wallet address (replace with the actual address you want to check)
const walletAddress = 'ALZN39CyyqkgjJEyLBt9rhvepG2VrWiTMVsXms6JbLRm';

// Call the function
checkSolanaBalance(walletAddress);

// Wallet Address: ALZN39CyyqkgjJEyLBt9rhvepG2VrWiTMVsXms6JbLRm
// Balance: 2 SOL