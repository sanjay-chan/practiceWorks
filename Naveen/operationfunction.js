function calculateWithOperation(number1, number2, operationFunction) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof operationFunction !== 'function') {
        return "Invalid input. Please provide two numbers and an operation function.";
    }

    // Apply the operation function to the two numbers
    return operationFunction(number1, number2);
}

// Example usage:
const addOperation = function (a, b) {
    return a + b;
};

const subtractOperation = function (a, b) {
    return a - b;
};

const multiplyOperation = function (a, b) {
    return a * b;
};

// Use the calculateWithOperation function with different operations
console.log(calculateWithOperation(5, 3, addOperation));      // Output: 8
console.log(calculateWithOperation(8, 2, subtractOperation)); // Output: 6
console.log(calculateWithOperation(4, 6, multiplyOperation)); // Output: 24
