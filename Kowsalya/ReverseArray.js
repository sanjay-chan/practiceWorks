/*const values = [1, 2, 3, 4, 5];
function reverseArray(values) {
    return values.reverse();
  }
const result = reverseArray(values);
  
console.log( result);*/

let a =0;
let rev=[];
function ReverseArray(arr){
    console.log("hey.");
    for(let i=arr.length-1;i>=0;i--){
        rev[a]=arr[i];
        a++;
    }
    return rev;

}
const values =["kows","yuva"];
console.log(ReverseArray(values));
