function removeFalsyValues(arr) {
    // Use filter to keep only truthy values
    return arr.filter(Boolean);
  }
  
  // Example usage:
  let inputArray = [false, 0, " ehduweufweuf", null, undefined, NaN, "hello", 42];
  let result = removeFalsyValues(inputArray);
  console.log(result);
  