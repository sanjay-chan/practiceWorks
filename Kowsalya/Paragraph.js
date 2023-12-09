function Paragraph(para) {
    
    const words = para.split(/\s+/);
  
   
    const count = words.filter((word) => word !== '');
  
    
    return count.length;
  }
  
  
  const input = "This is a sample paragraph. It has several words.";
  const result = Paragraph(input);
  console.log(result); 
  