function sortArray(array, comparator) {
    return array.slice().sort(comparator);
  }
  
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  function comparator(a, b) {
    return a - b;
  }
   console.log(sortArray(array, comparator)); 
  