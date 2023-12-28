function composeFunctions(fun1, fun2) {
    return function(arg) {

      const result1 = fun1(arg);
      
      const result2 = fun2(result1);
      
      return result2;
    };
  }
  
  
  function sub(x) {
    return x - 2;
  }
  
  function divide(x) {
    return x / 3;
  }
  
  const composedFunction = composeFunctions(sub, divide);
  console.log(composedFunction(5));
  