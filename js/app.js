// Navigation Toogler
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".navigation-bar");

burgerBtn.addEventListener("click", function() {
    navMenu.classList.toggle("toggle")
})