let array = [1,2,-3,-5,4,6];

const sumPositive = (arr)=> {
    return arr.filter(item => item>0).reduce((a,b)=> a+b);
}

console.log(sumPositive(array));