function composeFunctions(func1,func2){
    return function(arg){
        return func2(func1(arg));
    }
}

function double(x){
    return x*2;
}

function sqrt(x){
    return x*x;
}

console.log(composeFunctions(double,sqrt)(3));
