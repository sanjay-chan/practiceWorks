function manipulateArray(arr, manipulationFunction) {
    // Use map() to apply the manipulation function to each element
    return arr.map(manipulationFunction);
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 41,6,7,8,9, 5];
  
  // Define a manipulation function (e.g., squaring each element)
  const square = (number) => number ** 2;
  
  // Apply the manipulation function to the original array
  const modifiedArray = manipulateArray(originalArray, square);
  
  console.log(modifiedArray); // Output: [1, 4, 9, 16, 25]
  