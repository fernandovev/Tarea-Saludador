import {saludar} from "./Saludar.js";

describe("Saludar", () => {
  it("Deberia saludar la pagina", () => {
    expect(saludar()).toBe("Hola");
  });
});