function calculateFactorial(n) {
    
    if (n=== 0) {
        return 1;
    }

    return n * calculateFactorial(n - 1);
}


const result = calculateFactorial(3);
console.log("The factorial is",result); 
