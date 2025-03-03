export function saludar() {
    return "Hola";
  }
  
export function saludarPorNombre(nombre) {
    return `Hola, ${nombre}!`;
  }

export function saludarSegunHora(hora = new Date().getHours()) {
    if (hora < 12) {
      return "Buenos días";
    } else if (hora < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
}

export function saludarPorGenero(nombre, genero) {
    let titulo = "";
    
    if (genero === "M") {
      titulo = "Sr.";
    } else if (genero === "F") {
      titulo = "Sra.";
    }
  
    return titulo ? `Hola, ${titulo} ${nombre}!` : `Hola, ${nombre}!`;
}

export function saludarPorEdad(nombre, genero, edad){
    let titulo = "";
    
    if(edad > 30)
    {
        if (genero === "M") {
            titulo = "Sr.";
          } else if (genero === "F") {
            titulo = "Sra.";
          }
    }
    else
    {
        if (genero === "M") {
            titulo = "jovencito";
          } else if (genero === "F") {
            titulo = "jovencita";
          }
    }
  
    return titulo ? `Hola, ${titulo} ${nombre}!` : `Hola, ${nombre}!`;
}