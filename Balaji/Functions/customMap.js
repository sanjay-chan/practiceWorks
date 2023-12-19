function customMap(arr, mappingFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(mappingFunction(arr[i]));
  }
  return result;
}

function double(element) {
  return element * 2;
}

function square(element) {
  return element * element;
}

let numbers = [1, 2, 3, 4, 5];

console.log(customMap(numbers, double));
console.log(customMap(numbers, square));
