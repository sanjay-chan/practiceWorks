function calculateBMI(weight, height) {

   
      const result = weight/ (height*height); 
    return result;
}

const weight = 2 / 1000; // weight in grams
const height = 6 / 100; // height in centimeters

console.log("Body Mass Index",calculateBMI(weight, height)); 
