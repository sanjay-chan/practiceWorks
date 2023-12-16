function concatenateStrings(...input) {
  return input.reduce((res, val) => res + val);
}

let result = concatenateStrings("Hello", ", ", "World", "!");
console.log(result);

//