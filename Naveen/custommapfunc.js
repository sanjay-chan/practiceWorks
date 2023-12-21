function customMap(array, mappingFunction) {
    if (!Array.isArray(array) || typeof mappingFunction !== 'function') {
      throw new Error('Invalid arguments. Please provide an array and a mapping function.');
    }
  
    const resultArray = [];
  
    for (let i = 0; i < array.length; i++) {
      resultArray.push(mappingFunction(array[i]));
    }
  
    return resultArray;
  }
  
  // Example usage:
  
  const numbers = [1, 2, 3, 4, 5,6,7,8,9,];
  
  // Define a mapping function (e.g., square each element)
  const squareFunction = (num) => num * num;
  
  // Use customMap to apply the mapping function to each element of the array
  const squaredNumbers = customMap(numbers, squareFunction);
  
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  