let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], "",null];

function removeFalsey(arr) {
	
	let output = [];// 23,gfg, true, 
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			output.push(arr[i]);
		}
	}
	return output;
}
console.log(removeFalsey(arr));


