function generateFibonacci(n) {
  let fibval = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextNumber = fibval[i - 1] + fibval[i - 2];
    fibval.push(nextNumber);
  }
  return fibval;
}
let value = 8;
console.log(generateFibonacci(value));