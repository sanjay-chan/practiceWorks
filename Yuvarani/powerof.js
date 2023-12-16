
  function  isPowerTwo(n){
    let i = 1;
    while (i < n){
        i *= 2; // i=i*2
    }
    return i == n;
}

let n=8;
console.log(isPowerTwo(n));