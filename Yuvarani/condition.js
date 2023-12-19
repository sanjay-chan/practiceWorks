const array1 = [1, 2, 3, 4, 5,6,7,8,9,10];

const array2 = filtered(array1, odd);

function filtered(array1, odd) {  
    return array1.filter(odd);
  }
  
  function odd(array1) {      
    return array1 % 2 !== 0 ;
  }
  
  console.log("Original Array:", array1);
  console.log("Filtered Array:", array2);
  