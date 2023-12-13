function evenValue(inputValue){
    let res = inputValue.filter((data)=> data %2 == 0);
    return res;
}

let inputData = [1,2,3,4,5,6];
console.log(evenValue(inputData));

/*

ex: 
data[1] % 2==0 = 1 not even number
data[2] % 2==0 = 0 even number

*/

