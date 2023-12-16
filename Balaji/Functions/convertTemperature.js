function convertTemperature(value,type){
    if(type === "C"){
        return (value *9/5) + 32;
    }else if(type === "F"){
        return (value - 32) * 5/9;
    }

};
console.log(convertTemperature(96.8,"F"));

