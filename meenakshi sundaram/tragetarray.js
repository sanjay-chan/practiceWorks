function searchElement(arr, target) {

    return arr.includes(target);
  }
  
  
  const myArray = [1, 2, 3, 4, 5];
  const targetElement = 6;
  
  
  const isElementPresent = searchElement(myArray, targetElement);
  console.log(isElementPresent); 
  