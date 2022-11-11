// generic - when we don't know the type
// place holder of the types
// generic decides the type of the argument and return value automatically
// you don't lose type information unlike any

type SuperPrint = {
    <T, V>(arr: T[], V): T
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