//Menu btn **********************************************************************************************************************
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

function hideall() { //function to hide all pages
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
}

page1btn.addEventListener("click", function () {
    hideall();
    page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
    hideall();
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall();
    page3.style.display = "block";
});
hideall();

const openMenuBtn = document.querySelector("#menuBtn");
const menuItemsList = document.querySelector("nav ul");

openMenuBtn.addEventListener("click", toggleMenus);

function toggleMenus() {
    //if menuItemsList dont have the class "menuShow", add the class, else remove class
    menuItemsList.classList.toggle("menuShow");
    if (menuItemsList.classList.contains("menuShow")) {
        openMenuBtn.innerHTML = "Close Menu"; //change button text to close menu
    } else { //if menu NOT showing
        openMenuBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}

// Fullscreen ***********************************************************************************************************
const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");
btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

function enterFullscreen() { //must be called by user generated event
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Game *****************************************************************************************************************

const perfID = document.getElementById("perfID");

const scoreBox = document.getElementById("scoreBox");
var score = 0; //to track how many clicks

const sprayAudio = new Audio("audio/spraysound.mp3");

function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
function MovePerf() {
    perfID.style.left = GetRandom(0, 500) + "px";
    perfID.style.top = GetRandom(0, 450) + "px";
}

setInterval(MovePerf, 1000);

function perfCatch() {
    //increases score after clicking
    score++;
    //update html scorebox
    scoreBox.innerHTML = "Score: " + score;
    sprayAudio.play();
}

//link mouseclick to Catch function
perfID.addEventListener("click", perfCatch);

perfID.addEventListener("click", function () {
    perfID.classList.add("shrink");
    perfID.classList.remove("anim");
});

setInterval(function () {
    perfID.classList.remove("shrink");
    perfID.classList.add("anim");
}, 1000);

//Show viewport size*********************************************************************************

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
reportWindowSize();

window.addEventListener("resize", reportWindowSize);//when resize, update report

// upload onto github get qr code 3%
// check image aspect ratios
// final check onto validators
// if do all well i think can submit tdy