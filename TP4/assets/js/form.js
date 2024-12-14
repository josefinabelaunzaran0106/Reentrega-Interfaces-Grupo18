const boton = document.getElementById("button");
const inputt = document.getElementById("inputt");

const botoncss = boton.style;
const inputtcss = inputt.style;

// Agregamos el evento de clic
boton.addEventListener("click", () => {
  console.log(inputt.style);

  // Aplicamos estilos directamente al contenedor para el efecto
  boton.style.transform = "scale(1.05)"; // Zoom
  boton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Animación suave
  boton.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)"; // Sombra más intensa

  inputt.style.transform = "scale(1.05)"; // Zoom
  inputt.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Animación suave
  inputt.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)"; // Sombra más intensa

  // Después de 1 segundo, volvemos al estilo original
  setTimeout(() => {
    boton.style.transform = "scale(1)";
    boton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    boton.style = botoncss;

    inputt.style.transform = "scale(1)";
    inputt.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    inputt.style = inputtcss;
  }, 1000);
});
