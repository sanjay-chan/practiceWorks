let array=[625,763,66,736,44,23,22,37];

function even(array){
    let second=[];

    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            second.push(array[i])
        }
    }
    return second
}

console.log(even(array));

let array1=[625,763,66,736,44,23,22,37];

function odd(array1){
    let output=array1.filter(x=>x%2===0)

    console.log(output)
}

console.log(odd(array1));



















