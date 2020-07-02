//create a calculator function which accepts
//two numbers and a callback function which will
//some math (add. multiply) on those two numbers

function calculator (x,y,callback) {
    const output = callback(x,y)
    return output
}

function add (x,y) {
    return x + y
}

function multiply (x,y) {
    return x * y
}

function divide (x,y) {
    return x / y
}
const addOutput = calculator(1,2,add)
const multiplyOutput = calculator(1,2,multiply)
const divideOutput = calculator(1,2,divide)

console.assert(addOutput === 3, "addition expected 3")
console.assert(multiplyOutput === 2,"multiplication expected 2")
console.assert(divideOutput === 0.5, "division expected 0.5")