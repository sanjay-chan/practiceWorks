function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  
  // Example usage:
  const sortedArray1 = [1, 3, 5, 7];
  const sortedArray2 = [2, 4, 6, 8];
  const result = mergeArrays(sortedArray1, sortedArray2);
  console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  