function sumpos(inputdata) {
  let sum = 0;
  for(let i = 0; i<inputdata.length; i++ ){
    if(inputdata[i]>0){
        sum += inputdata[i];
    }
  }
  return sum;
}

let arr = [1, -2, -1, 4, -2, 5, 6];
console.log(sumpos(arr));

