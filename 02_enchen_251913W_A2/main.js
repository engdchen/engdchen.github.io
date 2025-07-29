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
openMenuBtn.addEventListener("click", toggleMenus);

const menuItemsList = document.querySelector("nav ul");

function toggleMenus() {
    //if menuItemsList dont have the class "menuShow", add the class, else remove class
    if (menuItemsList.classList.contains("menuShow")) {
        openMenuBtn.innerHTML = "Close Menu"; //change button text to chose menu
        menuItemsList.classList.remove("menuShow");
    } else { //if menu NOT showing
        openMenuBtn.innerHTML = "Open Menu"; //change button text open menu
        menuItemsList.classList.add("menuShow");
    }
}