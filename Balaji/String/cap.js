function cap(inputstr){
  const caparr = inputstr.split(' ');
  const capword = caparr.map(captit => {
    return captit.charAt(0).toUpperCase() + captit.slice(1);
  }); 
  const capsent = capword.join(' ');
  return capsent;
}

const str = "welcome to my javascript page";
console.log(cap(str));

