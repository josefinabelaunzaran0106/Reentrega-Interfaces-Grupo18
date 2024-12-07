"use strict";

// Seleccionar los botones izquierdo y derecho para cada carrusel
let allBtnIzqs = document.querySelectorAll(".btn-left-cards");
let allBtnDer = document.querySelectorAll(".btn-right-cards");

// Ocultar los botones izquierdo al principio
allBtnIzqs.forEach(boton => boton.classList.add("hidden"));

// Evento para los botones de la derecha
allBtnDer.forEach(boton => {
    boton.addEventListener("click", function () {
        // Obtener el carrusel correspondiente
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        // Ocultar las tarjetas visibles y mostrar las ocultas
        primerCincoCards.classList.add("hidden");
        segundoCincoCards.classList.add("mostrar");

        // Ocultar el botón derecho y mostrar el izquierdo
        boton.classList.add("hidden");
        boton.previousElementSibling.classList.remove("hidden");

        // Actualizar los botones del carrusel actual
        toggleButtons(carrusel);
    });
});

// Evento para los botones de la izquierda
allBtnIzqs.forEach(boton => {
    boton.addEventListener("click", function () {
        // Obtener el carrusel correspondiente
        const carrusel = boton.closest(".carruselprincipal");
        const primerCincoCards = carrusel.querySelector(".cincocards");
        const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

        // Mostrar las tarjetas visibles y ocultar las ocultas
        primerCincoCards.classList.remove("hidden");
        segundoCincoCards.classList.remove("mostrar");

        // Ocultar el botón izquierdo y mostrar el derecho
        boton.classList.add("hidden");
        boton.nextElementSibling.classList.remove("hidden");

        // Actualizar los botones del carrusel actual
        toggleButtons(carrusel);
    });
});

// Función para manejar la visibilidad de los botones de cada carrusel
function toggleButtons(carrusel) {
    const primerCincoCards = carrusel.querySelector(".cincocards");
    const segundoCincoCards = carrusel.querySelector(".cincocards-ocultas");

    // Si las tarjetas ocultas están visibles, ocultar el botón derecho
    if (segundoCincoCards.classList.contains("mostrar")) {
        carrusel.querySelector(".btn-right-cards").classList.add("hidden");
        carrusel.querySelector(".btn-left-cards").classList.remove("hidden");
    } else {
        // Si las tarjetas visibles están activas, ocultar el botón izquierdo
        carrusel.querySelector(".btn-left-cards").classList.add("hidden");
        carrusel.querySelector(".btn-right-cards").classList.remove("hidden");
    }
}


