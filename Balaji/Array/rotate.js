function rotateArray(arr, k) {
  let length = arr.length;
  let rotatedArray = arr.slice(length - k).concat(arr.slice(0, length - k));
  return rotatedArray;
}

let arrData = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArray(arrData, k));



