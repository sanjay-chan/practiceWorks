const originalString="reverseString";
function ReverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString=+str[i];

    }
    return newString;
}
const result =ReverseString(originalString);
console.log(result);