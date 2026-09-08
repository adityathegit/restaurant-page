import oneImg from "../../asset/resource/1.webp"
import twoImg from "../../asset/resource/2.webp"
import threeImg from "../../asset/resource/3.webp"

const content = document.querySelector("#content");

const imageConfig = [
    {
        imageSrc: oneImg,
        alt: "one"
    },
    {
        imageSrc: twoImg,
        alt: "two"
    },
    {
        imageSrc: threeImg,
        alt: "three"
    }
]

const storyInfo = {
    content: `<strong>Welcome to The Restaurent & Co.</strong>
              We believe that great food brings people together. Located in the
              heart of the city, our kitchen merges time-honoured culinary
              traditions with a modern, playful twist. Whether you are catching
              up over casual drinks, celebrating a family milestone, or joining
              us for a lively weekend brunch, we promise a warm atmosphere and
              plates full of flavour.Everything on your plate from our
              slow-simmered sauces to our house-baked bread is made from scratch
              every single day. We partner closely with local farms and
              suppliers to ensure only the highest-quality, seasonal ingredients
              make it to your table.`
}

const cardsConfig = [
    {
        text: `“The atmosphere was electric, but the food stole the show. The
              house-made pasta is genuinely one of the best dishes I’ve ever had
              in my life. You can taste the freshness of the locally sourced
              ingredients in every single bite. We will definitely be regulars!”`,
        author: "- Sarah M., Local Food Critic"
    },
    {
        text: ` "Incredible service from the moment we walked in.The staff went
              above and beyond for our anniversary.Our steaks were cooked to
              absolute perfection.The handcrafted cocktails were a wonderful
              surprise.We felt incredibly valued throughout the entire
              evening.It was a truly flawless dining experience."`,
        author: "- David K., Google Reviewer"
    },
    {
        text: `“An absolute gem in the heart of the city. Whether you are
              stopping by for a casual drink after work or joining them for a
              lively weekend brunch, the vibe is always warm and welcoming.
              Everything from the bread to the desserts is clearly made from
              scratch.”`,
        author: "- Jessica L., Verified Diner"
    },
];

export const homePage = () => {
    // headings
    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.textContent = "Savour the Art of Honest Cooking.";

    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Fresh, locally sourced ingredients turned into unforgettable everyday meals.";

    // hero section
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    let imageHTML = "";
    imageConfig.forEach((image) => {
        imageHTML += `<img src=${image.imageSrc} alt=${image.alt} />`;
    });

    imageDiv.innerHTML = imageHTML;

    const story = document.createElement("div");
    story.classList.add("story");

    const storyPara = document.createElement("p");
    storyPara.innerHTML = storyInfo.content;

    story.appendChild(storyPara);

    heroSection.append(imageDiv, story);

    // cards section
    const cards = document.createElement("div");
    cards.classList.add("cards");

    let cardsHTML = "";
    cardsConfig.forEach((card) => {
        cardsHTML += `
        <div class="cards-para">
            <p>${card.text}</p>
            <p class="author">${card.author}</p>
        </div>
        `
    });
    cards.innerHTML = cardsHTML;


    content.append(heading, subHeading, heroSection, cards);
}


























/**
 * 
 * <div class="home-page">

        <div class="cards">
          
          <div class="cards-para">
            <p>
             
            </p>
            <p class="author"></p>
          </div>
          <div class="cards-para">
            <p>
              
            </p>
            <p class="author"></p>
          </div>
        </div>
      </div>
 */