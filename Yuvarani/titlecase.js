let str = "Today is a great day and good day";

function titleCase(str){
    let words = str.toLowerCase().split(" ");
    let newArray = [];

    for(let word of words){
        newArray.push(word[0].toUpperCase() + word.slice(1))
    }
    return newArray.join(" ");
}
console.log(titleCase(str));


