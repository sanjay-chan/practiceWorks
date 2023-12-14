function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const value = 10;
  console.log(isPrime(value)); // Output: true
  if(isPrime(value)){
    console.log(`${value} is prime number`);
  }else{
    console.log(`${value} is not prime number`);
  }
  