  //Function with return Statements
 function add(a,b){
    return a+b;
 }
 console.log(48+46);

 //Function with arbitrary Arguments

         //arbitrary  arguments are used when we don't know  how many argument will be passed to function
         
         
         
         function sum(){
            let total=0; //variable name total
            //for loop method
            for (let i=0; i<arguments.length; i++){

               total+=arguments[i]; //total = totle+argument[i]; 


            }
            return total;
         }
         console.log(sum(20, 180, 130, 884,845,584,584,58,));
 
// function as experssion

      const add_1=function(a,b){ //add_1 is variable name  
   return a+b;
}
      console.log(add_1(59,45));


//Arrow function
      const  add_arrow=(a,b)=>{return a*b};
      console.log(add_arrow(8,2));

//Arrow Function with map()

   const array1=[2,4,6,8,10];
   console.log(array1);
   let doubleNumbers=array1.map(number=>number*2); //*2 means multiplay number by 2
   console.log(doubleNumbers);
   
//Arrow Function with filter()
      const array2=['apple', 'banana','cherry','date', 'ornage',  'grape',  'kiwi',  'melon',  'pear',  'pineapple'];
      console.log(array2);

      let filteredWords= array2.filter(word => word.length>4);
      console.log(filteredWords);


//Using Arrow  functions in Reduce()


   let createCounter=()=>{
      let count=0;
      return () =>{
         count++;
         return count;
      }
}
let counter=createCounter();
   
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
 //this will print the value of count each time when we call this function

