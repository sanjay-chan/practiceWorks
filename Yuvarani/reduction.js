function reduceArray(array, initialValue, reductionFunction) {
    
    let accumulator = initialValue;
  
    for (let i = 0; i < array.length; i++) {
      accumulator = reductionFunction(accumulator, array[i]);
    }
  
    return accumulator;
  }
  
   const numbers = [1, 2, 3, 4, 5];

   function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  
  console.log(reduceArray(numbers, 0, sumReducer)); 
  