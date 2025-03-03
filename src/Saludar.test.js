import { saludar, saludarPorNombre } from "./Saludar.js";

describe("Saludar", () => {
  it("Debería saludar la página con 'Hola'", () => {
    expect(saludar()).toBe("Hola");
  });

  it("Debería saludar a una persona por su nombre", () => {
    expect(saludarPorNombre("Carlos")).toBe("Hola, Carlos!");
  });
});
