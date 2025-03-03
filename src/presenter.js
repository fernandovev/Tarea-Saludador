import {saludar} from "./Saludar.js";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  div.innerHTML = `<p>${saludar()}</p>`;
});

