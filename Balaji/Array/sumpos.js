function sumPositive(inputdata) {
  let sum = 0;
  for(let i = 0; i<inputdata.length; i++ ){
    if(inputdata[i]>0){
        sum += inputdata[i];
    }
  }
  return sum;
}

let arr = [1, -2, -1, 4, -2, 5, 6];
console.log(sumPositive(arr));

/*Ex: 

for i = 0; i<1; i++
if inputdata[1]>0
0 += inputdata[1]

output = 1+4+5+6 = 16


*/

