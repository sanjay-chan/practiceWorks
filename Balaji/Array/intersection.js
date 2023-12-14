function arrayIntersection(array1, array2){
    return array1.filter(item => array2.includes(item));
};

let arr1 =[1,2,3,4,5,6]; 
let arr2 =[6,90,32,1,3,4]; 
console.log(arrayIntersection(arr1, arr2));

