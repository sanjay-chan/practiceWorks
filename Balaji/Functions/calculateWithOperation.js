function addtwo(x,y){
    return x+y;
};

function subtwo(x,y){
    return x-y;
};

function calculateWithOperation(func1,func2,operation){
    return operation(func1, func2);
};

console.log(calculateWithOperation(5,3,addtwo));
console.log(calculateWithOperation(5,3,subtwo));
  