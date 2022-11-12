// Interface

// 타입은 기본 형식 뿐만 아니라, 특정 값을 지정해 줄 수도 있다.
type Team = "red" | "blue" | "yellow"

type Player4 = {
    nickname: string,
    team: Team
}

const eum2: Player4 = {
    nickname: "eum",
    team: "red"
}

// 인터페이스 예시
// 인터페이스는 타입과 똑같이 작동하며 타입은 인터페이스보다 더 다양한 것들을 할 수 있다.
// 하지만 인터페이스는 '=' 기호가 들어가지 않아 코드가 조금 더 간결하고
// 오직 오브젝트가 어떻게 생겼는지를 나타내기 위해 사용되기 때문에 보다 효율적이다.
interface Player5 {
    nickname: string,
    team: Team
}

// 인터페이스로 상속을 받고 싶은 경우
interface User2 {
    name: string;
}

interface Player6 extends User2 {
}

const eum4: Player6 = {
    name: "eum"
}

// Type으로 상속을 받고 싶은 경우
type User3 = {
    name: string;
}

type Player7 = User3 & {    
}

const eum5 : Player7 = {
    name: "eum"
}

// 타입스크립트는 동일한 명의 인터페이스들이 있을때 이를 모두 합쳐준다.
// Type은 이런거 없음
interface User4 {
    name: string
}

interface User4 {
    lastName: string
}

interface User4 {
    firstName: string
}

const eum6: User4 = {
    name: "eum",
    lastName: "N",
    firstName: "F"
}

// Abstract class vs Interface
// 추상 클래스는 자바스크립트로 변환할 경우 클래스로 변환이 된다.
// 하지만 인터페이스는 자바스크립트로 변환할 경우 사라짐. 
abstract class User5 {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}

    abstract sayHi(name: string): string
    abstract fullName(): string
}

class Player8 extends User5 {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 위 추상클래스를 인터페이스로 변경해보자.
// 인터페이스에서 작성된 property들은 모두 public이 되어야 한다.
// 또한 인터페이스에서는 생성자를 선언할 수 없다.
// 클래스는 여러개의 인터페이스를 implement할 수 있다. (클래스는 하나의 클래스만 상속받을 수 있음)
interface User6 {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}

class Player9 implements User6 {
    constructor(
        public firstName: string, // private로 선언이 불가능 - interface이기 때문
        public lastName: string
    ) {}

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }

}