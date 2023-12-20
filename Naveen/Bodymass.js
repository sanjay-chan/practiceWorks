function calculateBMI(weight, height) {
    // Ensure non-negative values for weight and height
    if (weight <= 0 || height <= 0) {
        return "Invalid input. Weight and height must be positive values.";
    }

    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);

    // Round BMI to two decimal places
    return parseFloat(bmi.toFixed(2));
}

// Example usage:
const weight = 56; // in kilograms
const height = 1.72; // in meters

const bmiResult = calculateBMI(weight, height);
console.log(`BMI: ${bmiResult}`);





