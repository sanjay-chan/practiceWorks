let string="this been a very big sentence by sundaram";

let count=0;

function wordcount(string){

    let second= string.split(' ')
    
    for(let i=0;i<second.length;i++){
       
            count=count+1
        
    }

 return count

}

console.log(wordcount(string))