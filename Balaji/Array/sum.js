function sum(input){
    let res = input.reduce((total, arg)=> total+arg);
    return res;
}

let val = [23,4,5,6,2];
console.log(sum(val));
