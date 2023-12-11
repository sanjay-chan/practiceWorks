const array = [1,2,3,[4,[5,6],7]];

function flattenArray(array){
    let arr = [];

    function helper(array){

    for (let i=0; i<array.length; i++){

        let element = array[i];

        if(Array.isArray(element)){
            
            helper(element);
        }
        else{
            arr.push(element);
        }
    }
}
      helper(array);

      return arr;
}
console.log(flattenArray(array));



// function flattenArray(nestedArray) {
//     return nestedArray.flat();
//   }
  
//   var nestedArray = [1, [2, 3], [4, [5, 6]]];
//   var flattenedArray = flattenArray(nestedArray);
  
//   console.log(flattenedArray);


  