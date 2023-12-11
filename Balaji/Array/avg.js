function findAverage(inputData){
    let res = inputData.reduce((acc, val)=> acc+val);
    let res1 = res / inputData.length;
    return res1;
};

let inputArr = [1,2,5,6,7];
console.log(findAverage(inputArr));  


