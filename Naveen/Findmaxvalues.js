function findMaxValue(arr) {
  // Use Math.max with the spread operator to find the maximum value
  return arr.length > 0 ? Math.max(...arr) : undefined;
}

// Example usage:
let inputArray = [3, 7, 1, 88,22,55,9, 5];
let result = findMaxValue(inputArray);
console.log(result);
