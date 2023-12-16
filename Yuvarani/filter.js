const array1 = [1, 2, 3, 4, 5,6,7,8,9,10];

const array2 = filtered(array1, even);

function filtered(array1, even) {  
    return array1.filter(even);
  }
  
  function even(array1) {      
    return array1 % 2 === 0 ;
  }
  
  console.log("Original Array:", array1);
  console.log("Filtered Array:", array2);
  