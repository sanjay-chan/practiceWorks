// let numbers = [1,2,3,4,5];
// function even(numbers){

//   const values = numbers.filter((num)=> num % 2 == 0);
//   return values;

// }

// console.log(even(numbers));
  

let numbers = [1,2,3,4,5,];

function arr1(numbers){

     if(numbers % 2==0){

         return numbers;
     }
       
}

function arr2(){
   return numbers.filter(arr1)
}

console.log(arr2());