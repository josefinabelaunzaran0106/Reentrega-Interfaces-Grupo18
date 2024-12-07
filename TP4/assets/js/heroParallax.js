
// elementos del hero
const arbol1 = document.getElementById('img-arbol1');
const arbol2 = document.getElementById('img-arbol2');
const arbol3 = document.getElementById('img-arbol3');

const nube1 = document.getElementById('img-nube1');
const nube2 = document.getElementById('img-nube2');
const nube3 = document.getElementById('img-nube3');
const nube4 = document.getElementById('img-nube4');

const nubegris1 = document.getElementById('img-nubegris1');
const nubegris2 = document.getElementById('img-nubegris2');
const nubegris3 = document.getElementById('img-nubegris3');
const nubegris4 = document.getElementById('img-nubegris4');
const nubegris5 = document.getElementById('img-nubegris5');

const personajerojo = document.getElementById('img-personajerojo');
const personajenaranja = document.getElementById('img-personajenaranja');
const personajeamarillo = document.getElementById('img-personajeamarillo');



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        const scrollPosition = window.scrollY;
        

        // Elementos que desaparecen hacia la izquierda
        arbol1.style.transform = `translateX(${-scrollPosition /4}px)`;
        nube1.style.transform = `translateX(${-scrollPosition /3}px)`;
        nubegris2.style.transform = `translateX(${-scrollPosition /2}px)`;
        nube2.style.transform = `translateX(${-scrollPosition /2}px)`;
        personajerojo.style.transform = `translateX(${-scrollPosition}px)`;

        // Elementos que desaparecen hacia la derecha
        personajenaranja.style.transform = `translateX(calc(${scrollPosition}px))`;
        personajeamarillo.style.transform = `translateX(calc(${scrollPosition /1.5}px))`;
        arbol2.style.transform = `translateX(calc(${scrollPosition /3}px))`;
        arbol3.style.transform = `translateX(calc(${scrollPosition /5}px))`;
        nube4.style.transform = `translateX(calc(${scrollPosition}px))`;
        nube3.style.transform = `translateX(calc(${scrollPosition}px))`;
        nubegris4.style.transform = `translateX(calc(${scrollPosition /3}px))`;
        nubegris3.style.transform = `translateX(calc(${scrollPosition /2}px))`;
        nubegris5.style.transform = `translateX(calc(${scrollPosition}px))`;

    } else {
    }
});
