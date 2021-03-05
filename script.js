let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let randomBtn = document.querySelector(".random");

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background;
};

const randomColor = () => {
    color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setGradient();
};

randomBtn.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
