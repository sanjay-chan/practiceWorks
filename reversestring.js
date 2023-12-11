//Reverse string//

function reverse(str) {
    //str =  "welcome to javascript"
    var output = str.split('').reverse().join('');
    //console.log(output);
    return output;
}
let c = reverse("welcome to javascript");
console.log("The reverse string of=", c)