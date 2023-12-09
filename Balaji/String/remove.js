function remove(inputstr) {
  return inputstr.split("").filter((value, index, src) => src.indexOf(value) === index).join("");
}

let str = "softdigisolutions";
console.log(remove(str));
