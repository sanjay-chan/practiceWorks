function random(min,max){
    if(min==2 && max==7){
      var output = Math.floor(Math.random()*max);
    }
    return output
}


console.log(random(2,7))