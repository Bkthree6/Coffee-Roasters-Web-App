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


var optionBtn1 = document.querySelector(".header-btn-1");

optionBtn1.addEventListener("click", toggleBtn);

function toggleBtn() {

    if (document.getElementById("header-btn").style.transform == "rotateX(180deg)") {
        document.getElementById("header-btn").style.transform = "rotateX(0deg)";
    } else {
        document.getElementById("header-btn").style.transform = "rotateX(180deg)";
    }

}
var optionBtn2 = document.querySelector(".header-btn-2");

optionBtn2.addEventListener("click", toggleBtn2);

function toggleBtn2() {

    if (document.getElementById("header-btn-2").style.transform == "rotateX(180deg)") {
        document.getElementById("header-btn-2").style.transform = "rotateX(0deg)";
    } else {
        document.getElementById("header-btn-2").style.transform = "rotateX(180deg)";
    }

}

var optionBtn3 = document.querySelector(".header-btn-3");

optionBtn3.addEventListener("click", toggleBtn3);

function toggleBtn3() {

    if (document.getElementById("header-btn-3").style.transform == "rotateX(180deg)") {
        document.getElementById("header-btn-3").style.transform = "rotateX(0deg)";
    } else {
        document.getElementById("header-btn-3").style.transform = "rotateX(180deg)";
    }

}

var optionBtn4 = document.querySelector(".header-btn-4");

optionBtn4.addEventListener("click", toggleBtn4);

function toggleBtn4() {

    if (document.getElementById("header-btn-4").style.transform == "rotateX(180deg)") {
        document.getElementById("header-btn-4").style.transform = "rotateX(0deg)";
    } else {
        document.getElementById("header-btn-4").style.transform = "rotateX(180deg)";
    }

}

var optionBtn5 = document.querySelector(".header-btn-5");

optionBtn5.addEventListener("click", toggleBtn5);

function toggleBtn5() {

    if (document.getElementById("header-btn-5").style.transform == "rotateX(180deg)") {
        document.getElementById("header-btn-5").style.transform = "rotateX(0deg)";
    } else {
        document.getElementById("header-btn-5").style.transform = "rotateX(180deg)";
    }

}

var header = document.getElementById("btn-container-1");
var btns = header.getElementsByClassName("option-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-1");
    if (current == null) {
        this.className += " active-1";
    }
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-1", "");
    }
    this.className += " active-1";
    });
}

var header = document.getElementById("btn-container-2");
var btns = header.getElementsByClassName("option-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-2");
    if (current == null) {
        this.className += " active-2";
    }
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-2", "");
    }
    this.className += " active-2";
    });
}

var header = document.getElementById("btn-container-3");
var btns = header.getElementsByClassName("option-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-3");
    if (current == null) {
        this.className += " active-3";
    }
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-3", "");
    }
    this.className += " active-3";
    });
}

var header = document.getElementById("btn-container-4");
var btns = header.getElementsByClassName("option-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-4");
    if (current == null) {
        this.className += " active-4";
    }
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-4", "");
    }
    this.className += " active-4";
    });
}

var header = document.getElementById("btn-container-5");
var btns = header.getElementsByClassName("option-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-5");
    if (current == null) {
        this.className += " active-5";
    }
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-5", "");
    }
    this.className += " active-5";
    });
}
 
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
    document.getElementById("opt-item-2").innerHTML = x;
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

