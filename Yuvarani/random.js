function generateRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
}
const min = 10;
const max = 20;
console.log(generateRandomNumber(min, max));