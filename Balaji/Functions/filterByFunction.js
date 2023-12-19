let arr = [1,2,3,4,5,6,7,8,9,10];

function isEven(n){
    return n%2==0;
}

function filterof(arr,even){
    let res = arr.filter(even);
    return res;
}

let result = filterof(arr,isEven);
console.log("Input=>",arr,"Output=>",result);