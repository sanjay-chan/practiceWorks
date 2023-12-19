function sortArray(arr, comparatorFunction) {
  return arr.sort(comparatorFunction);
}

function ascending(a, b) {
  return a - b;
}

function descending(a, b) {
  return b - a;
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(sortArray(numbers, ascending));
console.log(sortArray(numbers, descending));
