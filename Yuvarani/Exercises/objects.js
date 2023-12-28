function sortArrayOfObjects(arrayOfObjects, key) {

    return arrayOfObjects.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }
  
  const people = [
    { name: 'John' },
    { name: 'Alice' },
    { name: 'Bob' }
  ];
  
  console.log(sortArrayOfObjects(people, 'name'));
  

  
  