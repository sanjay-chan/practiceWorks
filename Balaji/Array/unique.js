function unique(inputData){
    let array = new Set(inputData);
    let res = Array.from(array);
    return res;
};

let arr = [1,2,1,3,4,2,4,21,4,1];
console.log(unique(arr));

// 1,2,3,4,21
