let array =["dog","cats","bats","fish","cats","dog"];

function test(array){
     let second=[]
   for(let i=0;i<array.length;i++){
   if(array[i]==array.join().match("dog")){
      let output=second.push(array[i])
      console.log(output)
   }
   }
return second
}

console.log(test(array))