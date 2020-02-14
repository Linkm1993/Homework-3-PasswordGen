//Defining characters for password
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+";

//Handlers for HTML elements
let charNum = document.querySelector("#numberinput")
let lowerBox = document.getElementById("lowercase")
let numBox = document.getElementById("numbers")
let symBox = document.getElementById("specialchar")
let yourPw = document.getElementById("yourPw")
let submitButton = document.getElementById("button")

//Defines characters as the upperChase, modifies characters value based on which extra criteria are checked, changes the value of yourPW to the generated password
submitButton.addEventListener("click",function(e){
    let characters = upperCase;
    (numBox.checked) ? characters += numbers : '';
    (symBox.checked) ? characters += symbols : '';
    (lowerBox.checked) ? characters += lowerCase : '';
    yourPw.value = password(charNum.value, characters);
});

//For loop that itterates through the characters vaule the number of times defied
function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}