function customMap(array, mappingFunction) {
    const mappedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(mappingFunction(array[i]));
    }

    return mappedArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  function square(x) {
    return x * x;
  }
 console.log(customMap(numbers, square)); 
  