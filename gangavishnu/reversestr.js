//Reverse a words and returns sentence with the order of words//

function reverseWords(sentence) {
    //sentence = "the man with golden heart"
    //console.log(sentence)
    const words = sentence.split(' ');
    const reversedWords = words.reverse().join(' ');
    return reversedWords;
}

let c = reverseWords("the man with golden heart")
console.log("order of words reversed=", c)