var attempt=3;

function validate(){
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;
    if(username == "Formget" && password == "formget#123"){
        alert("Login sucessfully");
        window.location = "succes.html";
    }
    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");

        if(attempt == 0){
            document.getElementById("username").disable = true;
            document.getElementById("password").disable = true;
            document.getElementById("submit").disable = true;
            return false
        }
    }
}

function validate(){
    var x= 
    document.getElementById("validate()").Required;
    document.getElementById("container").innerHTML=x;
}