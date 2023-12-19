function calculateWithOperation(num1, num2, operation) {
    return operation(num1, num2);
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


let resultAdd = calculateWithOperation(5, 3, add);
console.log("Addition:", resultAdd); 

let resultSubtract = calculateWithOperation(5, 3, subtract);
console.log("Subtraction:", resultSubtract); 

let resultMultiply = calculateWithOperation(5, 3, multiply);
console.log("Multiplication:", resultMultiply);

let resultDivide = calculateWithOperation(6, 2, divide);
console.log("Division:", resultDivide); 
