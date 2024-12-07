//preloader

window.addEventListener("load", function() {
    const percentageElement = document.querySelector('#percentage');
    const progressBar = document.querySelector('.progress-bar');
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".all");

    // Inicializa el porcentaje en 0%
    let percentage = 0;

    // Función para actualizar el porcentaje en el DOM
    function updatePercentage() {
        percentageElement.textContent = `${percentage}%`;
        progressBar.style.width = `${percentage}%`;

        // Si el porcentaje no ha llegado al 100%, incrementa en 1 después de un breve retraso
        if (percentage < 100) {
            percentage++;
            setTimeout(updatePercentage, 40); // Actualiza cada 40 milisegundos
        } else {
            // Oculta el preloader cuando llega al 100%
            loader.classList.add("loader-hidden");
        }
    }

    // Comienza el proceso de carga
    updatePercentage();

    loader.addEventListener("transitionend", function() {
        content.classList.add("show"); // Carga todo el contenido
        this.remove(); // Borra el div loader
    });
});
//nav section
let botonesFooter = document.querySelectorAll("#footer-btn");

botonesFooter.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    });
});

// let botonesNav = document.querySelectorAll("#menu-nav");

let perfil = document.querySelector(".perfil");
let carrito = document.querySelector(".carrito");
let menuburguer = document.querySelector(".hamburguer-menu-desplegado");

perfil.addEventListener("click", function() {
    perfil.nextElementSibling.classList.toggle("show");
    carrito.nextElementSibling.classList.remove("show");
    menuburguer.classList.remove("show");
});

carrito.addEventListener("click", function() {
    carrito.nextElementSibling.classList.toggle("show");
    perfil.nextElementSibling.classList.remove("show");
    menuburguer.classList.remove("show");
});


// botonesNav.forEach(boton => {
//     boton.addEventListener("click", function() {
//         boton.parentElement.nextElementSibling.classList.toggle("show");
//         console.log(boton);
//     })
// });

let openedBurguer = false; //

document.querySelector("#menu-burguer").addEventListener("click", function( ) {
    document.querySelector("#menuH").classList.toggle("show");
    let img = document.querySelector("#imgburguer");


    document.querySelector(".carritoDesplegado").classList.remove("show");
    document.querySelector(".perfilDesplegado").classList.remove("show");
    
    if(!openedBurguer) {
        img.src = "imgs/iconos/hamburguesa.png";  
    }
    else {
        img.src = "imgs/iconos/hamburguesa.png";
    }
    openedBurguer = !openedBurguer;    
});

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