function compose(func1,func2){
    return function(arg){
        return func2(func1(arg));
    }
}

function addtwo(x){
    return x+2
}

function mulit(x){
    return x*3
}

console.log(compose(addtwo,mulit)(5))