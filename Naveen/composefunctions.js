function composeFunctions(func1, func2) {
    if (typeof func1 !== 'function' || typeof func2 !== 'function') {
        return "Invalid input. Please provide two functions.";
    }

    // Return a new function that is the composition of func1 and func2
    return function (arg) {
        const intermediateResult = func1(arg);
        const finalResult = func2(intermediateResult);
        return finalResult;
    };
}

// Example usage:
const addOne = x => x + 11;
const multiplyByTwo = x => x * 12;

const composedFunction = composeFunctions(addOne, multiplyByTwo);

// Use the composed function
console.log(composedFunction(5)); // Output: (5 + 1) * 2 = 12
