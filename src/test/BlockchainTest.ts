import Blockchain from "../model/Blockchain";

console.log(`Creating the blockchain with the genesis block...`)
const blockchain = new Blockchain();

blockchain.addBlock(`First Block`)
blockchain.addBlock(`Second block`)

console.log(JSON.stringify(blockchain, null , 2))