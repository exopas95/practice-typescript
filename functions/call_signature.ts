// How to make function 1
function add(a: number, b: number): number {
    return a + b
}

// How to make function 2 - arrow method
const add2 = (a: number, b: number) => a + b;

// Call Signature
// If you write call signature, you don't have to explicit the types
type ADD = (a: number, b: number) => number;
const add3: ADD = (a, b) => a + b;