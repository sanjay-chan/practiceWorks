function composeFunctions(fun1, fun2) {
    return function(arg) {

      const result1 = fun1(arg);
      
      const result2 = fun2(result1);
      
      return result2;
    };
  }
  
  
  function add(x) {
    return x + 2;
  }
  
  function multiply(x) {
    return x * 3;
  }
  
  const composedFunction = composeFunctions(add, multiply);
  console.log(composedFunction(5));
  