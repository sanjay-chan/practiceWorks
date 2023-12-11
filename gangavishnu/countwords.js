//count words in a paragraph//

function words(str) {
    //let str="A young man was coming from the other end of the road.He came to Ramu and said,Ramu,you are blind,and you are foolish too.you cannot see,you are carrying a lamp in your hand")
    let output = str.split(' ').length;
    //console.log(output);
    return output;
}
let n = words("A young man was coming from the other end of the road.He came to Ramu and said,Ramu,you are blind,and you are foolish too.you cannot see,you are carrying a lamp in your hand")
console.log(" The number of words in a paragraph=", n);