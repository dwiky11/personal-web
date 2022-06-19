const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const body = document.body

menu.addEventListener('click',() => {
    nav.classList.toggle('slide');
});


toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});
