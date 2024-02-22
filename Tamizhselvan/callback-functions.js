// 1.Callback function

// callback function is  a function that we pass as an argument to  another function, and the main function will call back
    //example
    function myCallBack(){
        console.log("I am a callback  function");
    }
    myCallBack(); // calling function
    //callback function 
    function higherOrderFunction(fun){
        fun(); // calling parameter  function
    }
    higherOrderFunction(myCallBack); //calling  higher order function with call back 

    
//2. callBack function using set time out

 const myTimeOut= setTimeout(myTime, 1000);//  settime out  will execute after  1 sec
 function myTime(){ //call myTime function
    alert("hello"); // alert box show reload 1 sec 
 }

 //3. callBack function using setIntervel time

 const myIntervel= setInterval(myIntervelTime, 3000000); //set Intervel  will execute every  3 sec;

    function  myIntervelTime() {
        alert("Intervel Time")
    }
    