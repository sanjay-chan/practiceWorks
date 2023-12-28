function calculateWithOperation(num1, num2, operationFunction) {  
    return operationFunction(num1, num2);
  }

  //operation function
  function add(x, y) {
    return x + y;
  }
  
  console.log("Addition:", calculateWithOperation(5, 3, add)); 
 