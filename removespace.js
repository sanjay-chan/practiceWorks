//Remove extra space//

function removeextraspaces(Str) {
    let str = "welcome    to       the       javascript."
   // console.log(str);
    let output = str.replace(/ +/g, ' ').trim();
    return output;
}
let c = removeextraspaces(" welcome    to       the       javascript.");
console.log("Remove extra spaces=", c);