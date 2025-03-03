import {saludar, saludarPorNombre, saludarSegunHora, saludarPorGenero, saludarPorEdad, saludarPorIdioma} from "./Saludar.js";

const button = document.querySelector("#saludar-button");
const nameInput = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");
const genderInput = document.querySelector("#genero-select");
const EdadInput = document.querySelector("#Edad-numero");
const IdiomaInput = document.querySelector("#idioma-select");

button.addEventListener("click", () => {
  const nombre = nameInput.value.trim();
  const genero = genderInput.value;
  const edad = Number.parseInt(EdadInput.value);
  const idioma = IdiomaInput.value;
  const saludoHora = saludarSegunHora(new Date().getHours(), idioma);

  if (nombre) {
    div.innerHTML = `<p>${saludoHora}, ${saludarPorIdioma(nombre, genero, edad, idioma)}</p>`;
  } else {
    div.innerHTML = `<p>${saludoHora}</p>`;
  }
});

