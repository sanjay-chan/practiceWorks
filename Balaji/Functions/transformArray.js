let arr = [1,2,3,4,5,6,7,8,9,0];

function findTheValue(a){
    return a%2
}

let res = arr.map(findTheValue);
console.log(res)