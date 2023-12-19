function calculateVolume(length, width, height) {
    // Calculate the volume of the box
    const volume = length * width * height;
    return volume;
  }
  
  // Example usage:
  const boxLength = 5;
  const boxWidth = 3;
  const boxHeight = 2;
  
  const boxVolume = calculateVolume(boxLength, boxWidth, boxHeight);
  console.log(`The volume of the box is: ${boxVolume} cubic units.`);
  