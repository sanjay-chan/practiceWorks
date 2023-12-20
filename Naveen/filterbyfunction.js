function filterByFunction(arr, filterFunction) {
    if (!Array.isArray(arr) || typeof filterFunction !== 'function') {
        return "Invalid input. Please provide an array and a filtering function.";
    }

    // Use the filter method to apply the filtering function
    const filteredArray = arr.filter(filterFunction);

    return filteredArray;
}

// Example usage:
const numbers = [1, 2, 13,51,21,77,23, 3, 2,44,92,64,4, 5, 6,66,3,3,28,88,668];

// Define a filtering function (e.g., filter even numbers)
const isEven = element => element % 2 === 0;

// Apply the filtering function and print the result
const filteredNumbers = filterByFunction(numbers, isEven);
console.log(filteredNumbers); // Output: [2, 4, 6]
