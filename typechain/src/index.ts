import crypto from "crypto";    // 만약에 자바스크립트 패키지를 불러오는데 타입스크립트로 선언이 되어있지 않다면
                                // DefinitelyTyped Repo에 들어가서 확인하고 npm으로 받을 수 있음
                                // npm i -D @types/node <- node.js를 위한 타입들을 모두 다운해줌

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash: string, height: number, data: string): string {
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");

    }
}

class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }

    public getPrevHash() {
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }

    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }

    public getBlocks() {
        // return this.blocks;  이렇게 리턴하면 블록에 접근이 가능함. 따라서 새로운 배열을 선언해서 리턴한다.
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("First One");
blockchain.addBlock("Second One");
blockchain.addBlock("Third One");
blockchain.getBlocks().push(new Block("xxxxx", 1111, "HACKEDDDDDD!!!"));    // new array 때문에 데이터에 변형 X

console.log(blockchain.getBlocks());