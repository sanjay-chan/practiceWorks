function generateRandomNumber(min, max) {
    if (min >= max) {
        throw new Error('Minimum value must be less than the maximum value.');
    }

    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range) + min;

    return randomNumber;
}

// Example usage:
const min = 100;
const max = 220;
const randomNum = generateRandomNumber(min, max);
console.log(randomNum);
