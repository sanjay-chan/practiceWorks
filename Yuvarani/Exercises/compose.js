function composeFunctions(fun1, fun2) {
    return function(arg) {

      return fun2(fun1(arg));     
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
  