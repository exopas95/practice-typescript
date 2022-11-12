// 1. Overloading
type Add = {
    (a: number, b: number): number 
    (a: number, b: String): number
}

const add4: Add = (a, b) => {
    if(typeof b === "string") return a
    return a + b
 }

 // 가장 많이 쓰이는 예시
 type Config = {
    path: string,
    state: object
 }

 type Push = {
    (path: string): void
    (config: Config): void
 }

 const push: Push = (config) => {
    if (typeof config == "string") {
        console.log(config)
    } else {
        console.log(config.path)
    }
 }

 // 추가 예시
 type Add2 = {
    (a: number, b:number) : number,
    (a: number, b:number, c: number) : number
 }

 const add5: Add2 = (a, b, c?: number) => {
    if(c) return a + b + c
    return a + b
 }