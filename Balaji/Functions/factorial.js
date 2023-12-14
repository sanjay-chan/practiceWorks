function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

let data = fact(5);
console.log(data);

//eg result = result * i
//

