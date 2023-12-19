function filterByCondition(array, conditionFunction) {
    return array.filter(conditionFunction);
  }
  
  function check(number) {
    return number < 7;
  }
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  
  const evenNumbers = filterByCondition(numbers, check);
  
  console.log(evenNumbers); 
  