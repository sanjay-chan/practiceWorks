function myfunction(falsy) {
   values = [0, 1, 2, null, undefined, 0, true, "", NaN]
   // console.log(values)
    let output = values.filter(Boolean);
    //console.log(output)
    return output;
}
let c = myfunction(0, 1, 2, null, undefined, 0, true, "", NaN)
console.log("filter out falsy values=", c)