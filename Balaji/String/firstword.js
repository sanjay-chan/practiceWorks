function fisrtword(inputstr){
    let result = inputstr.split(' ');
    // let occ = result.filter(word => word === target).length;
    for(let i = 0; i<result.length; i++){
        if(target.includes(result[i])){
            count++
        }
    }
    return count;
}

let str = "Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. To watch the dancing is a breathtaking experience.";
let count = 0;
let target = "is";
console.log('Number of time the word occurr in parah:',fisrtword(str));