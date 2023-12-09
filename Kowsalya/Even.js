let number=[1,2,3,4,5,6];
function Even(number){
    let count = number.filter((num) =>num % 2 ==0);
    return count;
}
console.log(Even(number))