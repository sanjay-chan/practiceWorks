function reduceArray(arr, init, reductionFunction) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = reductionFunction(acc, arr[i]);
  }
  return acc;
}

function sum(acc, val) {
  return acc + val;
}

function product(acc, val) {
  return acc * val;
}

const numbers = [1, 2, 3, 4, 5];

console.log(reduceArray(numbers, 0, sum)); 
console.log(reduceArray(numbers, 1, product)); 
