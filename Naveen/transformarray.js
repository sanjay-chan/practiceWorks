function arrayTransformation(arr, transformationFunction) {
    // Use map() to apply the transformation function to each element
    const transformedArray = arr.map(transformationFunction);
    return transformedArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5,6,7,8,9,11,12,33,1089];
  
  // Define a transformation function (e.g., squaring each element)
  const square = (number) => number ** 2;
  
  // Apply the transformation function to the original array
  const transformedArray = arrayTransformation(originalArray, square);
  
  console.log(transformedArray); // Output: [1, 4, 9, 16, 25]
  