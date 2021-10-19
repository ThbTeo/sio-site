const body = document.body;
body.className = "light";

function myFunction() {
    var buttonMode = document.getElementById("myButton2");
    if (body.className == "light") {
        buttonMode.className = "fas fa-moon";
        body.className = "dark";
    }
    else {
        buttonMode.className = "far fa-moon";
        body.className = "light";
    }
}