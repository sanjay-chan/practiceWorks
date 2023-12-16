function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    var heightInMeters = height / 100;

    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);

    // Round BMI to two decimal places
    bmi = parseFloat(bmi.toFixed(2));

    return bmi;
}

// Example usage
var weight = 70; // in kilograms
var height = 175; // in centimeters

var bmiResult = calculateBMI(weight, height);
console.log("BMI:", bmiResult);
