let string="dog dog dog cat walls street";

let count=0;

function traget(string){

    let second= string.split(' ')
    
    for(let i=0;i<second.length;i++){
       if(second[i]== string.match('dog'))
       {
            count=count+1
        }
    }

 return count

}

console.log(traget(string))