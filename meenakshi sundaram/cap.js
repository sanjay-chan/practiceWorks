let string="meenakshi sundaram";

function capletter(string){

    let second= string.split(' ')
    for(let i=0;i<second.length;i++){
        let output = second[i][0].toUpperCase()+second[i].substring(1);
        console.log(output)
    }

 

}

console.log(capletter(string))