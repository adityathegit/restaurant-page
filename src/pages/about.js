
const content = document.querySelector("#content");

export const aboutPage = () => {
    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.textContent = "Our Story, Our Passion.";

    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Bringing people together over honest cooking and local flavours.";
    subHeading.style.fontWeight = "bold";

    const para = document.createElement("p");
    para.style.textAlign = "justify";
    para.style.margin = "10px";
    para.style.width = "64rem";
    para.style.fontSize = "19px";
    para.textContent = `
    The Restaurant & Co. was born out of a simple idea: 
    food should be authentic, comforting, and shared with the people you love. 
    Founded by a small group of friends who shared a deep passion for hospitality, 
    our goal was to create a space where time-honoured culinary traditions blend seamlessly with modern cooking styles.
    We wanted a place that feels like home from the second you walk through the front door warm, lively, and always smelling of fresh food.
    `;

    const form = document.createElement("form");

    const formHTML = `
        <label for="firstName">FIRSTNAME</label>
        <input type="text">
        <label for="lastName">LASTNAME</label>
        <input type="text">
        <label for="email">EMAIL</label>
        <input type="email">
        <label for="message">FEEDBACK</label>
        <textarea name="message" id="message" cols="30" rows="10">Hi, </textarea>
        <div>
        <button>Submit</button>
        </div>
    `;

    form.innerHTML = formHTML

    content.append(heading, subHeading, para, form);
}