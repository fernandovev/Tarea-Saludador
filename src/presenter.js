import {saludar, saludarPorNombre, saludarSegunHora, saludarPorGenero} from "./Saludar.js";

const button = document.querySelector("#saludar-button");
const nameInput = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");
const genderInput = document.querySelector("#genero-select");

button.addEventListener("click", () => {
  const nombre = nameInput.value.trim();
  const saludoHora = saludarSegunHora();
  const genero = genderInput.value;

  if (nombre) {
    div.innerHTML = `<p>${saludoHora}, ${saludarPorGenero(nombre, genero)}</p>`;
  } else {
    div.innerHTML = `<p>${saludoHora}</p>`;
  }
});

