function calculateFactorial(number = 5){
    if(number == 1){
        return 1;
    }
    return number*calculateFactorial(number-1)
};

console.log('with argument:',calculateFactorial(3));
console.log('without argument:',calculateFactorial());

