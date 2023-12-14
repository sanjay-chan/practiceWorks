function isRandom(min, max) {
  let res = Math.floor(Math.random() * (max-min)+min);
  return res;
}
let input = isRandom(5, 10);
console.log(input);
