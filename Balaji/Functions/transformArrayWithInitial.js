function transformArrayWithInitial(array, func, val) {
  let result = val;
  for (let i = 0; i < array.length; i++) {
    result = func(result, array[i]);
  }
  return result;
}

function sumTransformer(accumulator, currentValue) {
  return accumulator + currentValue;
}

const numbers = [1, 2, 3, 4, 5];
console.log(transformArrayWithInitial(numbers, sumTransformer, 0));

