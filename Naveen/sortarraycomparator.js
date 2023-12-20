function sortArray(arr, comparator) {
    if (!Array.isArray(arr) || typeof comparator !== 'function') {
        return "Invalid input. Please provide an array and a comparator function.";
    }

    // Use the sort method with the comparator function
    const sortedArray = arr.slice().sort(comparator);

    return sortedArray;
}

// Example usage:
const numbers = [3, 1, 4, 1, 5, 334,333,9, 2,43,4,22,77,12,878,33 ,6, 5, 3, 5];
const ascendingComparator = (a, b) => a - b;
const descendingComparator = (a, b) => b - a;

// Sort the array in ascending order
const sortedAscending = sortArray(numbers, ascendingComparator);
console.log(sortedAscending); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Sort the array in descending order
const sortedDescending = sortArray(numbers, descendingComparator);
console.log(sortedDescending); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
