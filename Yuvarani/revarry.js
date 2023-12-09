// let fruits = ['mango', 'apple', 'banana'];

// function count(fruits){
//     return fruits.reverse();
// }

// console.log(count(fruits));



function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  
  const Array = [1, 2, 3, 4, 5];
  console.log(reverseArray(Array));  
  