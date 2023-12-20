function calculateFactorial(number = 5) {
    // Check if the number is non-negative
    if (number < 0) {
        return "Invalid input. Factorial is not defined for negative numbers.";
    }

    // Base case: factorial of 0 is 1
    if (number === 0) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return number * calculateFactorial(number - 1);
}

// Example usage:
console.log(calculateFactorial(5));  // Output: 120
console.log(calculateFactorial());   // Output: 120 (default value of 5 is used)
console.log(calculateFactorial(0));  // Output: 1 (factorial of 0 is 1)
console.log(calculateFactorial(-3)); // Output: "Invalid input. Factorial is not defined for negative numbers."
