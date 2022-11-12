// 함수를 만드는 방법 1
function add(a: number, b: number): number {
    return a + b
}

// 함수를 만드는 방법 2 - arrow method
const add2 = (a: number, b: number) => a + b;

// Call Signature 
// call signature를 사전에 만들어 두면 이후 타입을 명시적으로 작성해주지 않아도 된다.
type ADD = (a: number, b: number) => number;
const add3: ADD = (a, b) => a + b;