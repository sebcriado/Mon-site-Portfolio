const btn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".search-menu");
const crossBtn = document.querySelector(".cross");

btn.addEventListener("click", () => {
  menu.style.transform = "translateY(0%)";
});

crossBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(-100%)";
});
