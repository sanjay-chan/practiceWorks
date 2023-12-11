function evenValue(inputValue){
    let res = inputValue.filter((data)=> data %2 == 0);
    return res;
}

let inputData = [1,2,3,4,5,6];
console.log(evenValue(inputData));


