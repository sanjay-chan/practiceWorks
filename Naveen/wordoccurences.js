function firstword(inputstr){

let resultB = inputstr.split(' ');

for (let i = 0; i<resultB.length; i++) {
if(target.includes(resultB[i])){
    count++

}
}


return count;
}
let str = "When it comes to expressing your love for your significant other, sometimes  to the amtter of physics we want When it comes to expressing your love for your significant other, sometimes words fall short, and you don't know how to convey your emotions! However, as mentioned above, some well-crafted love paragraphs for him can convey your deepest feelings and make your partner feel cherished and loved! Whether it's a sweet message to start his day, a romantic note to end his night, or a random text to let him know you're thinking of him, there are endless ways to express your love. From heartfelt declarations to playful banter, these eloquent and cute love paragraphs to send to your partner will instantly make him feel appreciated, valued, and remembered";
 let count = 0;
 let target = "and";
 console.log('number of the time the word occur in paragraph:',firstword(str));


 