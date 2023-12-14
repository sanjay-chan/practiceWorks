function calculateBMI(weigth, height){
    let res = weigth / (height * height);
    return res;
};

let kg = 54;
let feet = 1.57
console.log(calculateBMI(kg,feet));