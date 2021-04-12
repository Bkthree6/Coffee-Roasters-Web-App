var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach( 
    function(menuLink) { 
        menuLink.addEventListener("click", toggleMenu);
    }
)
 
// Functions for the first set of buttons on plan.html
function option1Btn1() {
    var x = document.getElementById("opt-1-btn-1").value;
    document.getElementById("opt-item-1").innerHTML = x;
}
function option1Btn2() {
    var x = document.getElementById("opt-1-btn-2").value;
    document.getElementById("opt-item-1").innerHTML = x;
}
function option1Btn3() {
    var x = document.getElementById("opt-1-btn-3").value;
    document.getElementById("opt-item-1").innerHTML = x;
}

// Functions for the second set of buttons on plan.html
function option2Btn1() {
    var x = document.getElementById("opt-2-btn-1").value;
    document.getElementById("opt-item-1").innerHTML = x;
}
function option2Btn2() {
    var x = document.getElementById("opt-2-btn-2").value;
    document.getElementById("opt-item-2").innerHTML = x;
}
function option2Btn3() {
    var x = document.getElementById("opt-2-btn-3").value;
    document.getElementById("opt-item-2").innerHTML = x;
}

// Functions for the third set of buttons on plan.html
function option3Btn1() {
    var x = document.getElementById("opt-3-btn-1").value;
    document.getElementById("opt-item-3").innerHTML = x;
}
function option3Btn2() {
    var x = document.getElementById("opt-3-btn-2").value;
    document.getElementById("opt-item-3").innerHTML = x;
}
function option3Btn3() {
    var x = document.getElementById("opt-3-btn-3").value;
    document.getElementById("opt-item-3").innerHTML = x;
}

// Functions for the fourth set of buttons on plan.html
function option4Btn1() {
    var x = document.getElementById("opt-4-btn-1").value;
    document.getElementById("opt-item-4").innerHTML = x;
}
function option4Btn2() {
    var x = document.getElementById("opt-4-btn-2").value;
    document.getElementById("opt-item-4").innerHTML = x;
}
function option4Btn3() {
    var x = document.getElementById("opt-4-btn-3").value;
    document.getElementById("opt-item-4").innerHTML = x;
}

// Functions for the fifth set of buttons on plan.html
function option5Btn1() {
    var x = document.getElementById("opt-5-btn-1").value;
    document.getElementById("opt-item-5").innerHTML = x;
}
function option5Btn2() {
    var x = document.getElementById("opt-5-btn-2").value;
    document.getElementById("opt-item-5").innerHTML = x;
}
function option5Btn3() {
    var x = document.getElementById("opt-5-btn-3").value;
    document.getElementById("opt-item-5").innerHTML = x;
}