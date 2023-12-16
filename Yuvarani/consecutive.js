function findConsecutivePairs(numbers) {
    let pairs = [];

    for (let i = 0; i < numbers.length - 1; i++) {

        let num = [numbers[i], numbers[i + 1]];
        pairs.push(num);
    }

    return pairs;
}

let inputArray = [1, 2, 3, 4, 5];
console.log(findConsecutivePairs(inputArray));
