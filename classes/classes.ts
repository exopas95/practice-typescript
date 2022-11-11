// Basic example
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


// Advance example
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Words) {
        if (this.words[word.term] == undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: String,
        public df: String
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식")
const dict = new Dict()
dict.add("kimchi")