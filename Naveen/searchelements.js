function searchElement(array, target) {
    return array.includes(target);
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5,6,7,8,9,33,55,66,43,78,];
  const targetElement = 55;
  const isElementPresent = searchElement(myArray, targetElement);
  
  console.log(isElementPresent); // Output: true (since 3 is present in the array)
  