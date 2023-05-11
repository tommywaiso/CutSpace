const form = document.querySelector(".header__row-form");
const input = document.querySelector(".header__row-form-label-input");
const burger = document.querySelector(".nav__row-burger");
const menu = document.querySelector(".nav__row-list-menu");
const body = document.querySelector("body");
input.addEventListener("focus", function() {
	form.classList.add("form--active");
})

input.addEventListener("blur", function() {
	form.classList.remove("form--active");
})
burger.addEventListener("click", function() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
})
