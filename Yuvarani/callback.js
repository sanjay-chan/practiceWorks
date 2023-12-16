const array1 = [1, 2, 3, 4, 5];

const array2 = transformArray(array1, square);

function transformArray(array1,square) {  //high order function or main function
    return array1.map(square);
  }
  
  function square(array1) {      // helper function
    return array1 * 3;
  }

  console.log("Original Array:", array1);
  console.log("Transformed Array:", array2);
  
  