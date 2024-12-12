// elementos del hero
const arbol1 = document.getElementById("img-arbol1");
const arbol2 = document.getElementById("img-arbol2");
const arbol3 = document.getElementById("img-arbol3");

const nube1 = document.getElementById("img-nube1");
const nube2 = document.getElementById("img-nube2");
const nube3 = document.getElementById("img-nube3");
const nube4 = document.getElementById("img-nube4");

const nubegris1 = document.getElementById("img-nubegris1");
const nubegris2 = document.getElementById("img-nubegris2");
const nubegris3 = document.getElementById("img-nubegris3");
const nubegris4 = document.getElementById("img-nubegris4");
const nubegris5 = document.getElementById("img-nubegris5");

const personajerojo = document.getElementById("img-personajerojo");
const personajenaranja = document.getElementById("img-personajenaranja");
const personajeamarillo = document.getElementById("img-personajeamarillo");

// Entrada en pantalla de los elementos
window.addEventListener("load", () => {
  // Escondidos a la izquierda
  arbol1.style.transform = `translateX(${-375}px)`;
  nube1.style.transform = `translateX(${-380}px)`;
  nubegris2.style.transform = `translateX(${-380}px)`;
  nube2.style.transform = `translateX(${-380}px)`;
  personajerojo.style.transform = `translateX(${-600}px)`;

  // Escondidos a la derecha
  personajenaranja.style.transform = `translateX(600px)`;
  personajeamarillo.style.transform = `translateX(500px)`;
  arbol2.style.transform = `translateX(400px)`;
  arbol3.style.transform = `translateX(200px)`;
  nube4.style.transform = `translateX(600px)`;
  nube3.style.transform = `translateX(600px)`;
  nubegris4.style.transform = `translateX(400px)`;
  nubegris3.style.transform = `translateX(300px)`;
  nubegris5.style.transform = `translateX(600px)`;

  // Aparición de elementos
  setTimeout(() => {
    const elementos = [
      arbol1,
      nube1,
      nubegris2,
      nube2,
      personajerojo,
      personajenaranja,
      personajeamarillo,
      arbol2,
      arbol3,
      nube4,
      nube3,
      nubegris4,
      nubegris3,
      nubegris5,
    ];

    elementos.forEach((elemento, index) => {
      elemento.style.transition = "transform 0.8s ease-in-out, opacity 1s";
      elemento.style.opacity = "0"; // Inicialmente invisible

      setTimeout(() => {
        elemento.style.transform = "translateX(0)";
        elemento.style.opacity = "1"; // Hacer visible
      }, index * 5); // Retraso escalonado de 200ms por elemento
    });
  }, 0); // Retraso inicial antes de que comience la animación
});

// Parallax
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    const scrollPosition = window.scrollY;

    // Elementos que desaparecen hacia la izquierda
    arbol1.style.transform = `translateX(${-scrollPosition / 4}px)`;
    nube1.style.transform = `translateX(${-scrollPosition / 3}px)`;
    nubegris2.style.transform = `translateX(${-scrollPosition / 2}px)`;
    nube2.style.transform = `translateX(${-scrollPosition / 2}px)`;
    personajerojo.style.transform = `translateX(${-scrollPosition}px)`;

    // Elementos que desaparecen hacia la derecha
    personajenaranja.style.transform = `translateX(calc(${scrollPosition}px))`;
    personajeamarillo.style.transform = `translateX(calc(${
      scrollPosition / 1.5
    }px))`;
    arbol2.style.transform = `translateX(calc(${scrollPosition / 3}px))`;
    arbol3.style.transform = `translateX(calc(${scrollPosition / 5}px))`;
    nube4.style.transform = `translateX(calc(${scrollPosition}px))`;
    nube3.style.transform = `translateX(calc(${scrollPosition}px))`;
    nubegris4.style.transform = `translateX(calc(${scrollPosition / 3}px))`;
    nubegris3.style.transform = `translateX(calc(${scrollPosition / 2}px))`;
    nubegris5.style.transform = `translateX(calc(${scrollPosition}px))`;
  } else {
  }
});
