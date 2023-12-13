function sum(input){
    let res = input.reduce((total, arg)=> total+arg);
    return res;
}

let val = [23,4,5,6,2];
console.log(sum(val));

//getoutput: 40

/*
ex; 
total+arg
0+23
23+4
27+5
32+6
38+2==40
*/