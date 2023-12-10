function countLines(paragraph) {

    const linesArray = paragraph.split('\n');
    
    
    let lineCount = 0;

    for (let i = 0; i < linesArray.length; i++) {
        
        if (linesArray[i].trim() !== '') {
            lineCount++;
        }
    }
    
    return lineCount;
}

const paragraph = "This is line 1.\nThis is line 2.\n\nThis is line 3."; 
console.log(`The number of lines in the paragraph are`, countLines(paragraph));
