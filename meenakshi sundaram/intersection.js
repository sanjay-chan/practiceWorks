let one =[2,3,5,6,7];
let second=[3,6,8,9];
const output=[];

function inter(one,second){


    for(let i=0;i<one.length;i++){
        for(let j=0;j<second.length;j++){
            if(one[i]==second[j]){
               output.push(one[i])
            }
        }
    }
   return output
}

console.log(inter(one,second))