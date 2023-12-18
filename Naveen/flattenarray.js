function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
  }
  
  // Example usage:
  let inputArray = [1, [2, 3, [4, 5]], 6, [7, 8[9,10,11]]];
  let result = flattenArray(inputArray);
  console.log(result);
  