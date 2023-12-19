function calculateAverage(array, avg) {
  let sum = array.reduce((acc, val) => acc + avg(val), 0);
  return sum / array.length;
}
function doubleAverager(value) {
  return value * 2;
}
const numbers = [1, 2, 3, 4, 5];
console.log('input=>',numbers,'output=>',calculateAverage(numbers, doubleAverager))
