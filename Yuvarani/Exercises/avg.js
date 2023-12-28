function calculateAverage(array, averagingFunction) {
   
   const sum = array.reduce((accumulator, currentValue) => {
      return accumulator + averagingFunction(currentValue);
    }, 0);

    const average = sum / array.length;
  
    return average;
  }
  
  const array = [1, 2, 3, 4, 5];
  
  function averagingFunction(value) {
    return value * value;
  }
  console.log(calculateAverage(array, averagingFunction)); 