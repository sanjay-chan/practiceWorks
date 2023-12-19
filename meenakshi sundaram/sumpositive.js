let array=[65,57,555,-2,-5]
let sumnum=0

function sum(array) {
    for (var i = 0; i < array.length ; i++) { 
        if(array[i]>0){
            sumnum+=array[i]
        }else {
            console.log(array.pop(array[i]))
        }
    }
   return sumnum
 }

 console.log(sum(array))