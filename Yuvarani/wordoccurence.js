
const p = "This is a paragraph with full of sentences and the sentences are made for the paragraph.";

const t = "sentences";

function findWordOccurrences(p, t) {

    const word = p.split(' ');

    const occur= word.filter(word => {
    
        return word ===  t;
    });

    
    return occur.length;
}


const count = findWordOccurrences(p, t);

console.log("The occurence of the target word is" , count);




