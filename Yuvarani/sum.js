let numbers = [1, 2, 3, 4, 5];

function sumArray(numbers) {

   let sum = numbers.reduce((total, current) =>{
   return  total + current;

   });
   return sum;
}

console.log("The sum of all numbers is" ,sumArray(numbers)); 



