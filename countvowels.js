//count vowels//

const findvowels = (str) => {
    //str = "welcome to the javascript"
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;

        }
    }
    return count;
}
let c = findvowels("welcome to the javascript")
console.log("The number of vowels in sentence=", c)