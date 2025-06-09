// js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
// Shrink Navbar on Scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar‐scrolled");
  } else {
    navbar.classList.remove("navbar‐scrolled");
  }
});
