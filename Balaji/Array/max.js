function finded(input){
    let res = input.reduce((acc, curr)=> (curr > acc ? curr : acc));
    return res;
};

let val = [5,3,2,4,25,10];
console.log(finded(val));