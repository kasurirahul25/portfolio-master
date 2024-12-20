'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// Initialize the typing animation for the hero title
const typingAnimationHeroElement = document.getElementById('typing-animation-hero');

// The text you want to type and animate
const heroText = 'Good at Problem Solving & Web Development';

// Function to display the typing animation for a given text and element
function playTypingAnimation(element, text, isDeleting = false) {
    let currentText = element.textContent;
    const targetLength = isDeleting ? 0 : text.length;

    // If deleting, remove characters, else add them
    const changeText = () => {
        if (isDeleting && currentText.length > 0) {
            element.textContent = currentText.slice(0, -1);
        } else if (!isDeleting && currentText.length < targetLength) {
            element.textContent = text.slice(0, currentText.length + 1);
        }
    };

    // Call the function repeatedly at a certain speed
    const typingSpeed = 150; // Speed of typing
    const deletingSpeed = 100; // Speed of deleting
    const delayBetweenActions = 1000; // Delay before starting next action

    if (isDeleting) {
        setTimeout(() => {
            changeText();
            if (currentText.length > 0) {
                playTypingAnimation(element, text, true); // Continue deleting
            } else {
                // After deleting, re-type the text again
                setTimeout(() => {
                    playTypingAnimation(element, text, false);
                }, delayBetweenActions);
            }
        }, deletingSpeed);
    } else {
        setTimeout(() => {
            changeText();
            if (currentText.length < targetLength) {
                playTypingAnimation(element, text, false); // Continue typing
            } else {
                // After typing complete, delete the text one character at a time
                setTimeout(() => {
                    playTypingAnimation(element, text, true);
                }, delayBetweenActions);
            }
        }, typingSpeed);
    }
}

// Start typing animation for the hero text
playTypingAnimation(typingAnimationHeroElement, heroText, false);
