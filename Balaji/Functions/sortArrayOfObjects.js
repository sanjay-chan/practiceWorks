let students = [
    {name: 'balaji',age: 19},
    {name: 'aadhi',age: 29},
    {name: 'barath',age: 17},
    {name: 'perumal',age: 20}
];

function sortArrayOfObjects(arr, func){
    return arr.sort((a,b)=> a[func] - b[func]);
}


let sortArray = sortArrayOfObjects(students, 'age');
console.log('Output=>',sortArray)