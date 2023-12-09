const string = "countvowels";
function Vowels(str) {
    const vowel = 'aeiouAEIOU';
    let word = 0;
   for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) {
        word++;
      }
    }
    return word;
  }
  const result = Vowels(string);
  console.log(result); 
  