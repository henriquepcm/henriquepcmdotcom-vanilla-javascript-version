"use strict";

// Select DOM Elements
const elements = {
     body: document.body,
     html: document.documentElement,
     burger: document.getElementById("burger"),
     menuItems: document.querySelectorAll("#menu a"),
     menuBackground: document.getElementById("menu-background"),
     close: document.getElementById("close"),
     logo: document.getElementById("logo"),
     container: document.getElementById("container"),
     main: document.querySelector("main"),
     sections: document.querySelectorAll("section[id^='section']"),
     footer: document.querySelector("footer"),
     getFocusableElements: document.querySelectorAll("a"),
};

// Functions
function openMenu() {
     elements.menuBackground.classList.remove("-translate-x-full");
     elements.menuBackground.classList.add("translate-x-1/4");
     elements.body.classList.add("overflow-hidden");
     elements.html.classList.add("overflow-hidden");
}

function closeMenu() {
     elements.menuBackground.classList.add("-translate-x-full");
     elements.menuBackground.classList.remove("translate-x-1/4");
     elements.body.classList.remove("overflow-hidden");
     elements.html.classList.remove("overflow-hidden");
}

function hideSections() {
     elements.sections.forEach((section) => {
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

function unmarkMenuItems() {
     elements.menuItems.forEach((item) => {
          const liElement = item.parentNode;
          liElement.classList.remove("menu-item-active");
     });
}

function moveFocus(moveTo) {
     const focusableElements = Array.from(elements.getFocusableElements);
     const currentFocus = document.activeElement;
     const currentIndex = focusableElements.indexOf(currentFocus);
     const nextIndex =
          (currentIndex + moveTo + focusableElements.length) %
          focusableElements.length;
     focusableElements[nextIndex].focus();
}

function handleKeyboardClicks(e) {
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

// EventListeners
elements.burger.addEventListener("click", openMenu);
elements.menuBackground.addEventListener("click", closeMenu);
document.addEventListener("keydown", handleKeyboardClicks);

document.addEventListener("click", function (e) {
     const isBurgerClick = elements.burger.contains(e.target);
     if (!isBurgerClick) {
          closeMenu();
     }
});

elements.logo.addEventListener("click", (e) => {
     e.preventDefault();
     hideSections();
     unmarkMenuItems();

     setTimeout(() => {
          elements.sections[0].classList.remove("hidden");
     }, "110");

     setTimeout(() => {
          elements.sections[0].classList.add(
               "opacity-100",
               "duration-75",
               "ease-in"
          );
          elements.sections[0].classList.remove("opacity-0");
     }, "120");

     elements.main.classList.add("items-center");
});

elements.menuItems.forEach((menuItem) => {
     menuItem.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1); // Get the value on href and removes the "#"
          hideSections();
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
               elements.main.classList.add("items-center");

               // Add specific set of styles for the other sections
          } else {
               elements.main.classList.remove("items-center");
          }
     });
});

// Animations on page loading
elements.burger.classList.remove("opacity-0", "-translate-y-full");
elements.logo.classList.remove("opacity-0", "-translate-y-5");
elements.footer.classList.remove("opacity-0", "translate-y-5");
elements.sections[0].classList.remove("opacity-0");
