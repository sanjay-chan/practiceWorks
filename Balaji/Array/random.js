function shuffleArray(inputdata){
    for(let i = inputdata.length - 1; i>0;i++ ){
        let rand = Math.floor(Math.random() * (i+1));
        return rand;
    }
};

let inputarr = [1,2,3,4,5,6,7,8,9];
console.log(shuffleArray(inputarr));