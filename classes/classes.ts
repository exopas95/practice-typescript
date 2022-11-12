// 기본 예시
abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        public nickname: string
    ) {}

    abstract getNickName(): void

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class EumPlayer extends User {
    getNickName(): void {
        console.log(`${this.firstName} ${this.lastName}`) 
    }
}

const eum = new EumPlayer("eum", "las", "엄");
eum.getFullName()
eum.getNickName()


// 고급 예시
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.df] = word.df;
        }
    }
 
    def(term: string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public readonly term: string,   // public 이라 접근이 가능하지만 readonly라서 수정이 불가능
        public df: string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식")
const dict = new Dict()

dict.add(kimchi)