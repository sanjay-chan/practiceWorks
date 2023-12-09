let array1=[1,8,3,4,];
let array2=[2,3,4,5];



function merge(array1,array2){
   
  let sum= array1.concat(array2);
  return sum.sort();
}

console.log(merge(array1,array2))