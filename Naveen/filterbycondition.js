function filterByCondition(array, conditionFunction) {
    if (!Array.isArray(array) || typeof conditionFunction !== 'function') {
      throw new Error('Invalid arguments. Please provide an array and a condition-checking function.');
    }
  
    const filteredArray = array.filter(conditionFunction);
  
    return filteredArray;
  }
  
  // Example usage:
  
  const numbers = [18, 2, 3, 4, 5,68,10,12,16,];
  
  // Define a condition-checking function (e.g., include only even numbers)
  const isEven = (num) => num % 2 === 0;
  
  // Use filterByCondition to include only elements that satisfy the condition
  const evenNumbers = filterByCondition(numbers, isEven);
  
  console.log(evenNumbers); // Output: [2, 4]
  