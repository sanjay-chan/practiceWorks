let str="HAPPY WORLD";

function  RemoveDup(str){
    let remove="";
    for( let letter of str){
        if(remove.includes(letter)==false){

        
        remove += letter;
        }
    }
    return remove;
}
console.log(RemoveDup(str));