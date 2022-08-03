import * as crypto from 'crypto';

let nonce = 0
const sysdate: number = Date.now()

async function generateHash(input: string): Promise<string> {
  // const msgBuffer = new TextEncoder().encode(input);
  // const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  // const hashArray = Array.from(new Uint8Array(hashBuffer))
  // const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
  // return hashHex

  // window 에서는 위의 코드가 동작되지 않아, 아래의 코드로 변경
  return crypto.createHash('sha256').update(input).digest('hex')
}

async function calculateHashWithNonce(nonce: number): Promise<string> {
  const data = 'Hello World' + nonce;
  return generateHash(data)
}

async function mine(difficulty: number): Promise<void> {
  let hash: string;

  do {
    hash = await calculateHashWithNonce(++nonce)
  } while (!hash.startsWith('0'.repeat(difficulty)))
  console.log(`Hash: ${hash}, nonce: ${nonce}`)
  console.log(`during: ${Date.now() - sysdate}ms`)
}

mine(6)
