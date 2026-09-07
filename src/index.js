import "./style.css";

import lasagnaImg from "../asset/resource/lasagna.webp";
import smoothieImg from "../asset/resource/smoothie.webp";
import turkeyChiliImg from "../asset/resource/turkey-chili.webp";

const cardDetails = [
    {
        name: "Lasagna",
        imagePath: lasagnaImg,
        description: "A dish made by baking such pasta with layers of sauce and fillings such as cheese or meat."
    },
    {
        name: "Smoothie",
        imagePath: smoothieImg,
        description: "A drink that is made of fruit or sometimes vegetables and is blended with juice, milk, or yogurt and often ice until smooth."
    },
    {
        name: "Turkey Chilli",
        imagePath: turkeyChiliImg,
        description: "Turkey chili is a lighter, healthier alternative to traditional beef chili, typically made with lean ground turkey, kidney beans, tomatoes, and a blend of spices like cumin and chili powder."
    }
]

const content = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "Odin Restaurent";

const foodContainer = document.createElement("div");
foodContainer.classList.add("food-container");

let html = "";

cardDetails.forEach((detail) => {
    html += `
        <div class="food-item">
          <h3>${detail.name}</h3>
          <img src="${detail.imagePath}" alt="${detail.name}" />
          <p>
           ${detail.description}
          </p>
        </div>
    `
})
foodContainer.innerHTML = html;

content.append(heading, foodContainer);
