function transformArray(array, transformationFunction) {
    if (!Array.isArray(array) || typeof transformationFunction !== 'function') {
      throw new Error('Invalid arguments. Please provide an array and a transformation function.');
    }
  
    // Use the map function to apply the transformation to each element of the array
    const transformedArray = array.map(transformationFunction);
  
    return transformedArray;
  }
  
  // Example usage:
  
  const numbers = [1, 2, 3, 4,22,33,444, 5];
  
  // Define a transformation function (e.g., double each element)
  const doubleFunction = (num) => num * 2;
  
  // Use transformArray to apply the transformation function to each element of the array
  const transformedNumbers = transformArray(numbers, doubleFunction);
  
  console.log(transformedNumbers); // Output: [2, 4, 6, 8, 10]
  