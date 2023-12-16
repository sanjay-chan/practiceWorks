let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

function removeFalsey(arr) {
    
    return	arr.filter(Boolean);
	
    

}

console.log(removeFalsey(arr));
