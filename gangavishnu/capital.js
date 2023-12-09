//Capitalize the first letter//

function cap(sentence) {
    //const sentence="good morning to all"
   // console.log(sentence);
    const output = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //console.log(output);
    return output;
}
const c = cap("good morning to all");
console.log("capitalize the first letter=",c)