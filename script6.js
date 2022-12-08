function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "submit"){
        x.type = "text";
    }
    else{
        x.type = "submit";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("submit Succesfull");
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("submit  Failed");
    }
}

function lpage(){
    window.location.replace("index.html")
}