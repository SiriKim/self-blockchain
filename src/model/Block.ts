// interface Block {
//     index: number
//     timestamp: number
//     data: string
//     nonce: number
//     hash: string
//     previousBlockHash: string
// }

import * as crypto from "crypto";

export default class Block {
    readonly hash: string

    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        this.hash = this.calculateHash();
    }

    private calculateHash(): string {
        const data = this.index + this.previousHash + this.timestamp + this.data
        return crypto.createHash('sha256').update(data).digest('hex')
    }
}