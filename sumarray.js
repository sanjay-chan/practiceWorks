function chinna(nmbers) {
     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //console.log(numbers);
    let output = numbers.reduce((acc, number) => acc + number);
    return output;
}
let c = chinna(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("Total sum of numbers=", c)