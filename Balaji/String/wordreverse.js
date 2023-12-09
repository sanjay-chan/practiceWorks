function wordrev(inputstr){
    const spstr = inputstr.split(' ').reverse().join(' ');
    return spstr;
}

const str = "welcome to softdigisolutions";
console.log(wordrev(str))

