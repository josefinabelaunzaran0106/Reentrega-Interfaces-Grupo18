
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