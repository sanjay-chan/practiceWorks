function customFilter(array, filterFunction) {
    
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
      
      if (filterFunction(array[i])) {
        resultArray.push(array[i]);
      }
    }
  
    return resultArray;
  }

  function isEven(array) {
    return array % 2 === 0;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = customFilter(array, isEven);

  console.log(evenNumbers);
  