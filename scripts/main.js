"use strict";

// Select elements' IDs
const body = document.body;
const html = document.documentElement;
const burger = document.getElementById("burger");
const menuItems = document.querySelectorAll("#menu a"); // Select Menu Items
const menuBackground = document.getElementById("menu-background");
const close = document.getElementById("close");
const logo = document.getElementById("logo");
const container = document.getElementById("container"); // Select <div id="container">
const main = document.querySelector("main"); // Select <main>
const sections = document.querySelectorAll("section[id^='section']"); // Select sections' IDs
const footer = document.querySelector("footer");
const getFocusableElements = document.querySelectorAll("a");

//
let liElement;

function openMenu() {
     menuBackground.classList.remove("-translate-x-full");
     menuBackground.classList.add("translate-x-1/4");
     body.classList.add("overflow-hidden");
     html.classList.add("overflow-hidden");
}

function closeMenu() {
     menuBackground.classList.add("-translate-x-full");
     menuBackground.classList.remove("translate-x-1/4");
     body.classList.remove("overflow-hidden");
     html.classList.remove("overflow-hidden");
}

//Add event listener to the burger menu and menu's background
burger.addEventListener("click", openMenu);
menuBackground.addEventListener("click", closeMenu);

// Close the Menu if a click happens anywhere on the screen
document.addEventListener("click", function (e) {
     const isBurgerClick = burger.contains(e.target);
     if (!isBurgerClick) {
          closeMenu();
     }
});

//Function to hide all sections
function hideSections() {
     sections.forEach((section) => {
          section.classList.add("opacity-0", "duration-75", "ease-in");
          section.classList.remove(
               "delay-[900ms]",
               "duration-300",
               "opacity-100"
          );
          setTimeout(() => {
               section.classList.add("hidden");
          }, "100");
     });
}

//Function to remove styles from menu items that didn't get clicked
function unmarkMenuItems() {
     menuItems.forEach((item) => {
          const liElement = item.parentNode;
          liElement.classList.remove("menu-item-active");
     });
}

// Actions after menu click
menuItems.forEach((menuItem) => {
     menuItem.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1); // Get the value on href and removes the "#"
          hideSections(); // hide all sections
          unmarkMenuItems();
          e.target.parentNode.classList.add("menu-item-active");

          setTimeout(() => {
               document.getElementById(targetId).classList.remove("hidden");
          }, "110");

          setTimeout(() => {
               document.getElementById(targetId).classList.remove("opacity-0");
               document
                    .getElementById(targetId)
                    .classList.add("opacity-100", "duration-75", "ease-in");
          }, "120");

          // Add specific set of styles for specific sections
          if (
               [
                    "section-home",
                    "section-about",
                    "section-skills",
                    "section-projects",
               ].includes(targetId)
          ) {
               main.classList.add("items-center");

               // Add specific set of styles for the other sections
          } else {
               main.classList.remove("items-center");
          }
     });
});

//Add link to the logo
logo.addEventListener("click", (e) => {
     e.preventDefault();
     hideSections();
     unmarkMenuItems();

     setTimeout(() => {
          sections[0].classList.remove("hidden");
     }, "110");

     setTimeout(() => {
          sections[0].classList.add("opacity-100", "duration-75", "ease-in");
          sections[0].classList.remove("opacity-0");
     }, "120");

     main.classList.add("items-center");
});

// Animations for Burger Menu, Logo, Footer and Sections when the page loads
burger.classList.remove("opacity-0", "-translate-y-full");
logo.classList.remove("opacity-0", "-translate-y-5");
footer.classList.remove("opacity-0", "translate-y-5");
sections[0].classList.remove("opacity-0");

//Keyboard Events for Accessibility
const focusableElements = Array.from(getFocusableElements);

function keyboardClicks(e) {
     if (e.code === "Tab") {
          openMenu();
     } else if (e.code === "Escape") {
          closeMenu();
     } else if (e.code === "ArrowRight" || e.code === "ArrowDown") {
          moveFocus(1);
     } else if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
          moveFocus(-1);
     }
}

function moveFocus(moveTo) {
     const currentFocus = document.activeElement;
     const currentIndex = focusableElements.indexOf(currentFocus);
     const nextIndex =
          (currentIndex + moveTo + focusableElements.length) %
          focusableElements.length;
     focusableElements[nextIndex].focus();
}
document.addEventListener("keydown", keyboardClicks);
