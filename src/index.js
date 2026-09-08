import "./style.css";
import { menuPage } from "./pages/menu.js";
import { homePage } from "./pages/home.js";
import { aboutPage } from "./pages/about.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

const content = document.querySelector("#content");

homePage();

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homePage();
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage();
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    aboutPage();
})



