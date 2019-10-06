var greeting = "Welcome!";
var directions = "Select your criteria to generate your password."

var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!@#$%^&*()_-+=";

var charNum = document.getElementById ("charNum");
var numBox = document.getElementById ("num");
var symBox = document.getElementById ("sym");
var generate = document.getElementById ("submit");
var yourPwd = document.getElementById ("yourPwd");


alert(greeting);
alert(directions);


submit.addEventListener ("click",function(e){
    var characters = char;

    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';

    yourPwd.value = password (charNum.value, characters);

});

    function password(l,characters){
        var pwd = " ";

        for (var i = 0; i<l; i++){
            pwd += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return pwd;
    }

    function copyPassword (){
        document.getElementById ("yourPwd").select();
        document.execCommand("copy");
        alert ("Password copied to Clipboard!")
    }



