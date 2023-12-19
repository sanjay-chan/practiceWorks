function customFilter(array, filteringFunction) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (filteringFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5];
console.log('input=>',numbers,'output=>',customFilter(numbers, isEven));

