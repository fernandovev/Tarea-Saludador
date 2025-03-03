import {saludar, saludarPorNombre, saludarSegunHora, saludarPorGenero, saludarPorEdad} from "./Saludar.js";

const button = document.querySelector("#saludar-button");
const nameInput = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");
const genderInput = document.querySelector("#genero-select");
const EdadInput = document.querySelector("#Edad-numero");

button.addEventListener("click", () => {
  const nombre = nameInput.value.trim();
  const saludoHora = saludarSegunHora();
  const genero = genderInput.value;
  const edad = Number.parseInt(EdadInput.value);

  if (nombre) {
    div.innerHTML = `<p>${saludoHora}, ${saludarPorEdad(nombre, genero, edad)}</p>`;
  } else {
    div.innerHTML = `<p>${saludoHora}</p>`;
  }
});

