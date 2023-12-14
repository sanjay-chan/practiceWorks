function partitionArray(arr, predicate) {
  return arr.reduce((result, element) => {
      if (predicate(element)) {
        result[0].push(element);
      } else {
        result[1].push(element);
      }
      return result;
    },
    [[], []]
  );
}

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;
const [evenNumbers, oddNumbers] = partitionArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
