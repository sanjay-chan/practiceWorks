
const numbers = [1, 2, 3, 4, 5];
function array(numbers){

const sum = numbers.reduce((newValue, currentValue) => {
  return newValue + currentValue;
},2); 
return sum;
}

console.log(array(numbers)); 
