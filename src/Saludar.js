export function saludar() {
    return "Hola";
  }
  
export function saludarPorNombre(nombre) {
    return `Hola, ${nombre}!`;
  }

export function saludarSegunHora(hora = new Date().getHours(),idioma) {
    if (idioma === "Esp")
    {
        if (hora < 12) {
            return "Buenos días";
          } else if (hora < 18) {
            return "Buenas tardes";
          } else {
            return "Buenas noches";
          }
    }
    else if (idioma === "Ing")
    {
        if (hora < 12) {
            return "Good morning";
          } else if (hora < 18) {
            return "Good afternoon";
          } else {
            return "Good night";
          }
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

export function saludarPorIdioma(nombre, genero, edad, Idioma){
    let titulo = "";
    if(Idioma === "Esp")
    {
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
    else if(Idioma === "Ing")
    {
        if(edad > 30)
            {
                if (genero === "M") {
                    titulo = "Sir.";
                  } else if (genero === "F") {
                    titulo = "Madam.";
                  }
            }
            else
            {
                if (genero === "M") {
                    titulo = "young man.";
                  } else if (genero === "F") {
                    titulo = "young girl.";
                  }
            }
            return titulo ? `Hellou, ${titulo} ${nombre}!` : `Hellou, ${nombre}!`;
    }
}