//Title case and first letter to each word capitalize//

function c(str) {
    //str = "big moon"
    let titlecase = str.replace(/\b\w/g, c => c.toUpperCase());
    //console.log(titlecase);
    return titlecase;
}
let m = c("big moon")
console.log("title case=",m)