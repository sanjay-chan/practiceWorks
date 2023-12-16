function searchElement(n){
    let arr = [1,2,3,4,5];
    if(arr.includes(n)){
        return true
    }
    return false;
};

let number = 6;
console.log(searchElement(number));