// generic - 타입을 모를때 모든 타입을 사용할 수 있게 제너릭으로 선언한다.
// 타입의 placeholder 라고 생각하면 된다.
// generic은 타입이 들어오면, 그 타입을 유추하여 자동으로 그에 맞는 타입을 반환한다.
// 'any' 보다 좋은 점은, generic은 타입을 잃어버리지 않는다는 점!

type SuperPrint = {
    <T, V>(arr: T[], V): T

    /**
     * 아래의 것들을 모두 제너릭 한 줄로 쓸 수 있음
     * (arr: number[]): void
     * (arr: boolean[]): void
     * (arr: stringp[]): void
     * (arr: (number|boolean)[]): void
     * -> <T>(arr: T[]): T
     */
}

const superPrint: SuperPrint = (arr) => arr[0]

const vairable_1 = superPrint([1, 2, 3, 4], 1)
const vairable_2 = superPrint([true, false, true], "x")
const vairable_3 = superPrint(["a", "b", "c"], "")
const vairable_4 = superPrint([1, "2", false], true)


// Another Exmaple
type Player3<E> = {
    name: string,
    extraInfo: E
}

type NicoExtra = {
    favFood: String
}

type NicoPlayer = Player3<NicoExtra>

const nico2: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}