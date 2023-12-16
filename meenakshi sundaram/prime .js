
function prime(num){


    for( var i=2; i<num; i++) {
            if(num % i==0){
                console.log(num + " is not prime");
                break;
            }else{
                console.log(num + " is prime")
                break;
            }
         
}

}

prime(3)