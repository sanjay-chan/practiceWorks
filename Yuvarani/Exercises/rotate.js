let array = [1,2,3,4,5];
let k = 3; // no of positions

function rotateArray(array, k){

    
    for(let i=0; i< k; i++ )
    {
        const item = array.shift();  // Remove the first element
        array.push(item);         // Add the removed element to the end
    }  
     return array;
}
 console.log(rotateArray(array, k));

 //output
 //[4,5,1,2,3,]