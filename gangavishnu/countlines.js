//Count lines in a paragraph//

function countlines(paragraph) {
    //let paragraph="A young man was coming from the other end of the road.\n He came to Ramu and said,Ramu,you are blind,and you are foolish too.\n you cannot see,you are carrying a lamp in your hand")
    //console.log(paragraph);
    let output = paragraph.split('\n').length;
    //console.log(output);
    return output;
}
let c = countlines("A young man was coming from the other end of the road.\n He came to Ramu and said,Ramu,you are blind,and you are foolish too.\n You cannot see,you are carrying a lamp in your hand.")
console.log(" count number of lines in a paragraph=", c);