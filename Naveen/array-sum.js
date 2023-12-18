
function sumArray(numbers) {
    // Use the reduce method to sum up all the numbers in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,99);
    return sum;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5];
  const any = sumArray(numbersArray);
  
  console.log(any); 



  
  function titleCase(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');
  
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
  
    // Join the words back into a sentence
    let titleCaseSentence = words.join(' ');
  
    return titleCaseSentence;
  }
  
  // Example usage:
  let inputSentence = "this is an example sentence what about you.";
  let resultA = titleCase(inputSentence);
  console.log(resultA);
  