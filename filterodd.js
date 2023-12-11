function myfunction(numbers) {
    //numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 34, 20, 19, 15, 17, 18, 20, 32, 31, 45, 60, 100, 99]
    console.log(numbers)
    let output = numbers.filter(numbers => numbers % 2 == 1);
    // console.log(output)
    return output;
}
let c = myfunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 34, 20, 19, 15, 17, 18, 20, 32, 31, 45, 60, 100, 99)
console.log("filter in odd numbers=", c)