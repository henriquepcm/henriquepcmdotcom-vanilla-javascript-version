"use strict";

// Select elements' IDs
const burger = document.getElementById("burger");
const menuBackground = document.getElementById("menu-background");
const close = document.getElementById("close");
const body = document.body;
const logo = document.getElementById("logo");
const html = document.documentElement;

// Opens the Menu
function openMenu() {
  menuBackground.classList.remove("hidden");
  body.classList.add("overflow-hidden");
  html.classList.add("overflow-hidden");
}

// Closes the Menu
function closeMenu() {
  menuBackground.classList.add("hidden");
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

//Function to create menu links and logo to their respective section
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id^='section']"); // Select sections' IDs
  const menuItems = document.querySelectorAll("#menu a"); // Select Menu Items
  const logo = document.getElementById("logo"); // Select Logo
  const main = document.querySelector("main"); // Select <main>
  const container = document.getElementById("container"); // Select <div id="container">

  console.log(menuItems);

  //Function to hide all sections
  function hideSections() {
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
  }

  //Function to remove styles from menu items that didn't get clicked
  function unmarkMenuItems() {
    menuItems.forEach((item) => {
      item.classList.remove("menu-item--selected");
      item.classList.add("menu-item");
    });
  }

  // Hide all sections except the one that got clicked
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1); // Get the value on href and removes the "#"
      hideSections(); // hide all sections
      document.getElementById(targetId).classList.remove("hidden"); // Show the one that got clicked
      console.log(menuItems);

      // Remove styles from menu items that didn't get clicked
      unmarkMenuItems();

      // Add styles to the menu item that got clicked
      menuItem.classList.add("menu-item--selected");

      // Add specific set of styles for the Home and About sections
      if (["section-home", "section-about"].includes(targetId)) {
        main.classList.add("h-full");
        main.classList.remove("mt-10");
        container.classList.add("h-full");

        /*         // Add specific set of styles for the Skills and Education sections
      } else if (["section-skills", "section-education"].includes(targetId)) {
        main.classList.remove("h-full");
        container.classList.add("h-full"); */

        // Add specific set of styles for the other sections
      } else {
        main.classList.remove("h-full");
        main.classList.remove("mt-5");
        container.classList.remove("h-full");
        main.classList.add("mt-10");
      }
    });
  });
  //Add link to the logo
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    hideSections(); // Hide all sections
    unmarkMenuItems(); // Remove styles from menu items that didn't get clicked
    sections[0].classList.remove("hidden"); // Open the home section
    menuItems[0].classList.add("menu-item--selected"); // Mark Home on the menu as selected
    main.classList.add("h-full");
    main.classList.remove("mt-10");
    container.classList.add("h-full");
  });
});
