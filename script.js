
function generate (){
    let complexity = document.getElementById("slider").value;

    let value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    }

    document.getElementById("display").value = password;
}

document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function (){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML="Length:" + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML="Length: 1";
    }
}

function copyPassword (){
    document.getElementById("display").select();
    document.getElementById("copy");
    alert ("Password copied to clipboard!");
}