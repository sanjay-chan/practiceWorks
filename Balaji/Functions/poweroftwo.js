function isPower(n){
    let i = 1;
    while(i < n){ //i=1 and n = 10
        i *= 2; // i=i*2
    }
    return i==n;
}
let n=16;
console.log(isPower(n));