function isPowerOfTwo(number) {
    // Check if the number is greater than 0 and is a power of two
    return Math.log2(number) % 1 === 0;
}

// Example usage:
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(18));  // Output: true
console.log(isPowerOfTwo(13)); // Output: false
