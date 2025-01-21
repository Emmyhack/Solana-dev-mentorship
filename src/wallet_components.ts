// There are two components of the solana wallet
// the publickey and the secretkey
import { Keypair } from '@solana/web3.js';

// TO showcase this, 1: let's import our created solana wallet

import wallet from '../dev-wallet.json';

// 2: we create a keypair from our wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Now, let's print the publickey and verify that it matches the one from generate_wallet.ts

// lets access the publickey and make it human readable
const publicKey = keypair.publicKey.toBase58();
console.log('Public Key:', publicKey);

// Public Key: ALZN39CyyqkgjJEyLBt9rhvepG2VrWiTMVsXms6JbLRm