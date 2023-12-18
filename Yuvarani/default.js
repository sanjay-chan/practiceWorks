function calculateFactorial(number) {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i; 
      }
      return result; 
    }
//   console.log(calculateFactorial());      // without argument
  console.log(calculateFactorial(3));     // with argument

  