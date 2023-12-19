let input =[1,2,3,3,4,5,6,6,7,8,8];

function consective(input){
     let count =0;
      
     for(let i=0;i<input.length-1;i++){
        if(input[i]==input[i+1]){
            count++;
        }
     }
     return count
}


console.log(consective(input))