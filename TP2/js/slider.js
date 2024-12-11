"use strict";

// Seleccionar los botones izquierdo y derecho para cada carrusel
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

// Inicialización de variables
let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

// Al inicio, ocultamos el botón izquierdo
btnLeft.style.display = "none";  // El primer slide no debe tener el botón izquierdo

function moveToRight() {
    // Mover el slider a la derecha
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        
        // Ocultar el botón izquierdo porque estamos en el primer slide
        btnLeft.style.display = "none";
        return;
    }

    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    
    // Mostrar el botón izquierdo solo si no estamos en el primer slide
    if (counter > 0) {
        btnLeft.style.display = "block";
    }
}

function moveToLeft() {
    // Mover el slider a la izquierda
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        
        // Ocultar el botón izquierdo cuando estamos en el primer slide
        btnLeft.style.display = "none"; 
        return;
    }

    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .2s";

    // Mostrar el botón izquierdo cuando no estamos en el primer slide
    if (counter > 0) {
        btnLeft.style.display = "block"; 
    }
}



