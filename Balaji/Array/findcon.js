function findConsecutivePairs(data) {
  const pairs = [];

  for (let i = 0; i < data.length - 1; i++) {
    const pair = [data[i], data[i + 1]];
    pairs.push(pair);
  }

  return pairs;
}

const arr = [1, 2, 3, 4, 5];
const res = findConsecutivePairs(arr);
console.log(res);