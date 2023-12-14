function arrayIntersection(arr1, arr2) {

    const intersection = arr1.filter(element => arr2.includes(element));

    return intersection;
}


const arr1 = [1, 2, 3, 4, 5];
const arr2= [3, 4, 5, 6, 7];
console.log("The consecutive pairs:",arrayIntersection(arr1, arr2));
