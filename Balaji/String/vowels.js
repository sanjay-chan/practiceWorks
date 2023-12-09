let count = 0;
let str = "softdigisolutions";
let words = ['a','e','i','o','u'];

function vol(inputstr){
    let splitstr = inputstr.split('');
    for(let i = 0; i< splitstr.length; i++){ 
        if(words.includes(inputstr[i])){
            count++;
        }
    }
    return count;
}

console.log(vol(str));