let str = "Yuvarani is a good girl.";


function countVowels(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let i = 0; i < str.length; i++) {
    
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
    
}

console.log(`Number of vowels:`, countVowels(str));
