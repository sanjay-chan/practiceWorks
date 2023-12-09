let numbers = [1, 2, 3, 4, 5];

function sumArray(numbers) {

  return numbers.reduce((sum1, sum2) => sum1 + sum2, 0);


}

console.log("The sum of all numbers is" ,sumArray(numbers)); 



