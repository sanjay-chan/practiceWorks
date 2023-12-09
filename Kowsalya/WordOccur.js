const input = "This is a sample paragraph. It has several words.";
  const target = "several";
  function WordOccur(paragraph, targetWord) {
   const words = paragraph.split(/\s+/);
const filterWords = words.filter((word) => word !== '');
const occur = filterWords.reduce((count, word) => {
      return count + (word.toLowerCase() === target.toLowerCase() );
    }, 0);
  
    return occur;
  }
  
const result = WordOccur(input, target);
  console.log(result); 
  