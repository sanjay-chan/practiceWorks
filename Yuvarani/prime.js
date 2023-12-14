function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0) {
            return false;
        }
    else{
        return true;
       }
    }
}


const number = 5;
console.log(isPrime(number));
