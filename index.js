const btn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".search-menu");
const crossBtn = document.querySelector(".cross");
const buttons = document.querySelector(".nav-link");

btn.addEventListener("click", () => {
  menu.style.transform = "translateY(0%)";
  menu.classList.remove("hidden");
  menu.style.transition = "0.5s";
});

crossBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(-100%)";
});

buttons.addEventListener("click", () => {
  menu.classList.add("hidden");
});
