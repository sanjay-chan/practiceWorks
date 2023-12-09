function finded(input){
    let res = input.reduce((acc, curr)=> (curr > acc ? curr : acc),input[0])
    return res;
};

let val = [5,3,2,4,2,0];
console.log(finded(val));