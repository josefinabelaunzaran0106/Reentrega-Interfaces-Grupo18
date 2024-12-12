"use strict";

/* estrellas */

let estrellas = document.querySelectorAll(".estrella");

for (let i = 0; i < estrellas.length; i++) {
    estrellas[i].addEventListener("mouseenter", function() {
        //console.log("Estrella " + (i+1) + " seleccionada");  // Para ver si el evento se dispara

        // Rellenar las estrellas hasta la posición actual (inclusiva)
        for (let j = 0; j <= i; j++) {
            estrellas[j].src = "./imgs/iconos/estrellaRellenaInput.png";
        }

        // Vaciar las estrellas después de la posición actual
        for (let j = i + 1; j < estrellas.length; j++) {
            estrellas[j].src = "./imgs/iconos/estrellaVaciaInput.png";
        }
    });
}