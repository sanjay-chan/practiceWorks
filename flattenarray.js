//flatten array that takes a nested array//

let nums = [1, 2, 3, [4, 5],[6, 7, 8],[9, 10, 11], 12, 13]
//console.log(nums)
let result = []

function arrayfatten(arr) {
    for (ele of arr) {
        if (Array.isArray(ele)) {
            arrayfatten(ele)
        } else {
            result.push(ele)
        }
    }
}
arrayfatten(nums);
console.log(result)