let string="meenakshi sundaram";

function reverseword(string){
let output=''

for(let i=string.length-1;i<=string.length && i>=0;i--){
    output+=string[i]
}
return output

}

console.log(reverseword(string))