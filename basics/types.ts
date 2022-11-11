// 1. Implicit Types
// TypeScript automatically set variable a as type String.
// You can't assign other values then String to variable a.
let a = "hello";


// 2. Explicit Types
// You explicitly tell which type does vairable b has.
let b: Boolean = false;
let c: number[] = [1, 2];
let d: String[] = ["1", "2"];


// 3. Optional Types
// You can set the types of object field and make it nullable
const player: {
    name: String,
    age?: number
} = {
    name: "nico"
}

if (player.age && player.age < 10) {}


// 4. Function Return
type Player = {
    name: String,
    age?: number,
}

function playerMaker(name: String) : Player {
    return {
        name: name
    }
}

const nico = playerMaker("nico")
nico.age = 12


// 5. Read only property
type Player2 = {
    readonly name: String,
    age?: number
}

const names: readonly string[] = ["1", "2"];
// names.push("3") <- you can't do this 


// 6. undefined
let e : undefined = undefined
let f : null = null

// 7. Escape TypeScript
let g : any = undefined
g = 1

// 8. Types only in typescript
// 8-1. unknown - if the type is unknown
let h: unknown;
if(typeof h === "number") {
    let i = h + 1
}

// 8-2. void - function return nothing
function hello(): void {
    console.log("HI")
}

// 8-3. never - function never returns
function bye(name: string|number) {
    if(typeof name == "string") {
        name
    } else if (typeof name == "number") {
        name
    } else {
        name
    }
}