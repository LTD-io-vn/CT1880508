"use strict";

let navToggleState = false;

const navToggle = document.getElementById("nav-toggle");
const navBar = document.getElementById("nav-bar");

navToggle.addEventListener("click", () => {
	navToggleState = !navToggleState;
	if (navToggleState) {
		navBar.classList.add("visible");
		navToggle.classList.remove("fa-bars-staggered");
		navToggle.classList.add("fa-xmark");
	} else {
		navBar.classList.remove("visible");
		navToggle.classList.remove("fa-xmark");
		navToggle.classList.add("fa-bars-staggered");
	}
});

navBar.addEventListener("click", () => navToggle.click());
