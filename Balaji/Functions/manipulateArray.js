function double(x){
    return x * 2;
};

function sqrt(x){
    return x * x;
};

function manipulateArray(arr,func){
    return arr.map(func);
};

let arr = [1,2,3,4,5];
console.log(manipulateArray(arr,double));
console.log(manipulateArray(arr,sqrt));