let str = "HIPPOPOTAMUS";

function removedp(str){
    let word = "";
    for (const char of str)
    {
        if(word.includes(char)==false)
        {
            word += char;

        }
    }
    
    return word;
}

console.log(removedp(str));