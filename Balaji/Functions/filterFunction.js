let arr = [1,2,3,4,5,6,7,8,9,10];

function isOdd(x){
    return x%2===1;
};

function findTheValue(arr,isOdd){
    return arr.filter(isOdd);
};


let arr2 = findTheValue(arr,isOdd)
console.log('Input=>',arr,'Output=>',arr2)