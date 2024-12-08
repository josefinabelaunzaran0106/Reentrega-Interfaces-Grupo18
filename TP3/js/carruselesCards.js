"use strict";

// Seleccionar los botones izquierdo y derecho para cada carrusel
const allBtnIzqs = document.querySelectorAll(".btn-left-cards");
const allBtnDer = document.querySelectorAll(".btn-right-cards");

// Ocultar los botones izquierdo al principio
allBtnIzqs.forEach(boton => boton.classList.add("hidden"));

// Función para aplicar la transición suave solo a las tarjetas ocultas
function aplicarTransicionSuave(ocultar, mostrar, callback) {
    // Aplicar transición solo a las tarjetas "mostrar"
    mostrar.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    // Asegurarse de que el grupo "mostrar" sea visible pero posicionado fuera de vista
    mostrar.style.display = "flex";
    mostrar.style.opacity = "0";
    mostrar.style.transform = "translateX(100%)";

    // Iniciar la animación de entrada
    requestAnimationFrame(() => {
        mostrar.style.transform = "translateX(0)"; // Mover al centro
        mostrar.style.opacity = "1"; // Aparecer
    });

    // Hacer desaparecer las tarjetas "ocultar" de forma inmediata
    ocultar.style.transform = "translateX(-100%)"; // Mover hacia la izquierda
    ocultar.style.opacity = "0"; // Desaparecer

    // Finalizar la transición después del tiempo especificado
    setTimeout(() => {
        ocultar.style.display = "none"; // Ocultar el grupo saliente
        mostrar.style.transform = ""; // Resetear transformación
        mostrar.style.opacity = "1"; // Mantener visible

        // Ejecutar el callback si está definido
        if (callback) callback();
    }, 500); // Duración de la transición (500ms)
}

// Evento para los botones de la derecha
allBtnDer.forEach(boton => {
    boton.addEventListener("click", function () {
        // Seleccionar únicamente el carrusel que corresponde a este botón
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        // Aplicar transición suave
        primerCincoCards.style.display = "none"; // Ocultar las visibles sin transición
        aplicarTransicionSuave(primerCincoCards, segundoCincoCards, () => {
            boton.classList.add("hidden");
            boton.previousElementSibling.classList.remove("hidden");
        });
    });
});

// Evento para los botones de la izquierda
allBtnIzqs.forEach(boton => {
    boton.addEventListener("click", function () {
        // Seleccionar únicamente el carrusel que corresponde a este botón
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        // Aplicar transición suave
        segundoCincoCards.style.display = "none"; // Ocultar las visibles sin transición
        aplicarTransicionSuave(segundoCincoCards, primerCincoCards, () => {
            boton.classList.add("hidden");
            boton.nextElementSibling.classList.remove("hidden");
        });
    });
});



