"use strict";

// Seleccionar los botones izquierdo y derecho para cada carrusel
const allBtnIzqs = document.querySelectorAll(".btn-left-cards");
const allBtnDer = document.querySelectorAll(".btn-right-cards");

// Ocultar los botones izquierdo al principio
allBtnIzqs.forEach(boton => boton.classList.add("hidden"));

// Función para aplicar transición con rotación sin reubicaciones indeseadas
function aplicarTransicionRotacion(ocultar, mostrar, direccion, callback) {
    // Asegurarnos de que ambas tarjetas están posicionadas en el mismo lugar
    mostrar.style.position = "absolute";
    mostrar.style.top = "0";
    mostrar.style.left = "0";
    mostrar.style.width = "100%";

    // Configurar estilos iniciales para la animación
    mostrar.style.transition = "transform 1s ease, opacity 1s ease";
    mostrar.style.display = "flex";
    mostrar.style.opacity = "0";
    mostrar.style.transform = direccion === 'derecha'
        ? "rotateY(-90deg) translateX(100%)"
        : "rotateY(90deg) translateX(-100%)";

    ocultar.style.transition = "transform 1s ease, opacity 1s ease";
    ocultar.style.transform = "rotateY(0)";
    ocultar.style.opacity = "1";

    // Iniciar la animación
    requestAnimationFrame(() => {
        mostrar.style.transform = "rotateY(0) translateX(0)";
        mostrar.style.opacity = "1";

        ocultar.style.transform = direccion === 'derecha'
            ? "rotateY(90deg) translateX(-100%)"
            : "rotateY(-90deg) translateX(100%)";
        ocultar.style.opacity = "0";
    });

    // Finalizar la transición
    setTimeout(() => {
        ocultar.style.display = "none";
        mostrar.style.position = ""; // Resetear posición
        mostrar.style.transform = "";
        mostrar.style.opacity = "1";

        if (callback) callback();
    }, 1000);
}

// Evento para los botones de la derecha
allBtnDer.forEach(boton => {
    boton.addEventListener("click", function () {
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        aplicarTransicionRotacion(primerCincoCards, segundoCincoCards, 'derecha', () => {
            boton.classList.add("hidden");
            boton.previousElementSibling.classList.remove("hidden");
        });
    });
});

// Evento para los botones de la izquierda
allBtnIzqs.forEach(boton => {
    boton.addEventListener("click", function () {
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        aplicarTransicionRotacion(segundoCincoCards, primerCincoCards, 'izquierda', () => {
            boton.classList.add("hidden");
            boton.nextElementSibling.classList.remove("hidden");
        });
    });
});

