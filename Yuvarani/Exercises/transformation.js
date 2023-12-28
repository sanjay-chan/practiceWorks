const array1 = [1, 2, 3, 4, 5];

const array2 = transformArray(array1, add);

function transformArray(array1,add) {  //high order function or main function
    return array1.map(add);
  }

  function add(array1) {      // helper function
    return array1 + 2;
  }

  console.log("Original Array:", array1);
  console.log("Transformed Array:", array2);

  