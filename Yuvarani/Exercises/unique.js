const someArray = [1,2,3,1,3,2,3,4,5];

const getUniqueValues = (array) => (
  array.filter((currentValue, index, arr) => (
		arr.indexOf(currentValue) === index
	))
)


console.log(getUniqueValues(someArray))