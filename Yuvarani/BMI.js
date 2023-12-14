function calculateBMI(weight, height) {

    const result = weight/ (height*height); 
    return result;
}

const weight = 2;
const height = 6;

console.log("Body Mass Index",calculateBMI(weight, height)); 
