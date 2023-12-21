function composeFunctions(func1, func2) {
    // Return a new function that composes func1 and func2
    return arg => func2(func1(arg));
  }
  
  // Example usage:
  // Define two functions
  const addTwo = x => x + 1;
  const square = x => x ** 2;
  
  // Compose the two functions
  const composedFunction = composeFunctions(addTwo, square);
  
  // Apply the composed function to an argument
  const result = composedFunction(3);
  
  console.log(result); // Output: (3 + 2)^2 = 25
  