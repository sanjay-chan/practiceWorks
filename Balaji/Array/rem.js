function rem(arr) {
  return arr.filter(Boolean);
}

const inputArray = [0, 1, false, true, "", "hello", null, undefined, NaN, 42, []];
console.log(rem(inputArray));

/* 
 0= false
 1 = true
 false = false
 true = true

*/