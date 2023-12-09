function cap(inputstr){
    const caparr = inputstr.split(' ');
    const capword = caparr.filter(captit => {
      return captit.charAt(0).toUpperCase() + captit.slice(1);
    }); 
    const capsent = capword.join(' ');
    return capsent;
  }
  
  const str = "welcome to softdigisolutions";
  console.log(cap(str));
  
  