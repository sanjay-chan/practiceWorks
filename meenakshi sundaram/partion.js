let input=[2,3,6,9,4,5]


function partion(input){

    let outputeven=[];
    let outputodd=[];

    for(let i=0;i<input.length;i++){
        if(input[i] %2==0){
            outputeven.push(input[i])
        }else{
            outputodd.push(input[i])
        }
    }

    return [outputeven,outputodd]
}



console.log(partion(input))