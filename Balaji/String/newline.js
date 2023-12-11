function countLines(inputStr) {
  const line = inputStr.split("\n");
  const nol = line.length;
  return nol;
}

const str = "Hello\nWorld!\nHow are you?";
console.log('Number of line:',countLines(str));
