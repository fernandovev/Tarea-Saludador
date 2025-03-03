import { saludar, saludarPorNombre, saludarSegunHora, saludarPorGenero, saludarPorEdad } from "./Saludar.js";

describe("Saludar", () => {
    it("Debería saludar la página con 'Hola'", () => {
        expect(saludar()).toBe("Hola");
    });

    it("Debería saludar a una persona por su nombre", () => {
        expect(saludarPorNombre("Carlos")).toBe("Hola, Carlos!");
    });

    it("Debería decir 'Buenos días' antes de las 12pm", () => {
        expect(saludarSegunHora(8)).toBe("Buenos días");
    });

    it("Debería decir 'Buenas tardes' entre las 12pm y 6pm", () => {
        expect(saludarSegunHora(14)).toBe("Buenas tardes");
    });

    it("Debería decir 'Buenas noches' después de las 6pm", () => {
        expect(saludarSegunHora(20)).toBe("Buenas noches");
    });

    it("Debería saludar con género masculino", () => {
        expect(saludarPorGenero("Carlos", "M")).toBe("Hola, Sr. Carlos!");
    });
    
    it("Debería saludar con género femenino", () => {
        expect(saludarPorGenero("Ana", "F")).toBe("Hola, Sra. Ana!");
    });
    
    it("Debería saludar sin género definido", () => {
        expect(saludarPorGenero("Alex", "")).toBe("Hola, Alex!");
    });

    it("Debería saludar con señor o señora si tiene arriba de 30 años", () => {
        expect(saludarPorEdad("Alex", "M", 35)).toBe("Hola, Sr. Alex!");
    });

    it("Debería saludar con señor o señora si tiene arriba de 30 años", () => {
        expect(saludarPorEdad("Alex", "F", 10)).toBe("Hola, jovencita Alex!");
    });
});
