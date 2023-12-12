let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

function mergeArrays(arr1, arr2) {
  
    const mergedArray = arr1.concat(arr2); // Concatenate both arrays
    mergedArray.sort((a, b) => a- b);    // Sort the merged array in ascending order
  
    return mergedArray;
  }
  
 console.log("The sorted array is",mergeArrays(arr1, arr2) ); 
  