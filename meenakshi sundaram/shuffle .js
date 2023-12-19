let array=[34,65,98,67,22]


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        
        array[i] = array[j];
        console.log("test",array[i])
        array[j] = temp;
        
    }
       
    return array;
 }

 console.log(shuffleArray(array))