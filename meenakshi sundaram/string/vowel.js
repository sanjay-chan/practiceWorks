let string="this been a very big sentence  by sundaram";
let second= string.split(' ')
let count=0;

function vowels(second){

    
    for(let i=0;i<second.length;i++){
        let output = second[i].includes('a') || second[i].includes('e') ||second[i].includes('i') ||second[i].includes('o') ||second[i].includes('u') ;
        if(output===true){
            count=count+1
        }
    }

 return count

}

console.log(vowels(string))