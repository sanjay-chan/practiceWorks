const sent = "Kows alya";
function capitalize(sent) {
    const words = sent.split(' ');
    const capital = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedSent = capital.join(' ');
    return capitalizedSent;
  }
  const result = capitalize(sent);
  console.log(result);
  