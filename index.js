// Initialize

const btn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".search-menu");
const crossBtn = document.querySelector(".cross");
const buttons = document.querySelector(".nav-link");
const API_KEY = "wJk7lutnfSTxbkNPYG5fJIeEYbWx9v76L65GSWyg";
const API_ENDPOINT = "https://api.nasa.gov/planetary/apod";

// NAVBAR

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

// API NASA

async function getNasaImage() {
  try {
    const response = await fetch(`${API_ENDPOINT}?api_key=${API_KEY}`);
    const data = await response.json();
    const imageUrl = data.url;
    const nameUrl = data.copyright;
    const titleUrl = data.title;
    const titleElement = document.querySelector(".text-url");
    const nameElement = document.querySelector(".name-url");
    const imgElement = document.querySelector(".space");
    imgElement.src = imageUrl;
    nameElement.innerHTML = nameUrl;
    titleElement.innerHTML = titleUrl;
  } catch (error) {
    console.error(error);
  }
}

getNasaImage();

const myAtropos = Atropos({
  el: ".my-atropos",
  // rest of parameters
});
