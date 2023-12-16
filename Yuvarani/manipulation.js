const Array = [1, 2, 3, 4, 5];

function manipulateArray(Array, manipulationFunction) {
    return Array.map(manipulationFunction);
  }
  

  //manipulateFunction
  
  function squareElement(item) {
    return item * item;
  }
  
  console.log("Original Array:", Array);
  console.log("Manipulated Array (Squared Elements):", manipulateArray(Array,squareElement ));
  