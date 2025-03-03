import {saludar, saludarPorNombre} from "./Saludar.js";

const button = document.querySelector("#saludar-button");
const nameInput = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = nameInput.value.trim();
  if (nombre) {
    div.innerHTML = `<p>${saludarPorNombre(nombre)}</p>`;
  } else {
    div.innerHTML = `<p>${saludar()}</p>`;
  }
});

