"use strict";

//formulario registro

let iconoerror = document.querySelector('.icoerrorhidden');
let diverror = document.querySelector("#diverror");
let passerror = document.querySelector(".diverrorcontravis");
let form = document.querySelector('#formregister');
let inputerror = document.querySelector('.contraseñaerror');
let labelerror = document.querySelector('#labelerror');
let registrocorrecto = document.querySelector(".hidden");
form.addEventListener('submit', registrar);

let usuarios = [];

function registrar(e) { //paso x parametros el evento de submit}

    e.preventDefault();
    let datos = new FormData(formregister);
    let name = datos.get('fname');
    let surname = datos.get('lastname');
    let username = datos.get('nickname');
    let age = datos.get('edad');
    let email = datos.get('mail');
    let pass = datos.get('contraseña');
    let pass2 = datos.get('password2');

    let user = {
        "fnombre": name,
        "lastname": surname,
        "nickname": username,
        "edad": age,
        "mail": email,
        "contraseña": pass
    }
    if ((pass == pass2) && (!estaRegistrado(user)) && captchacompletado) {
        usuarios.push(user);
        mostrarPopup("Se ha registrado con exito");
        setTimeout("redireccionar()", 3000);
    }
    else {
        if (estaRegistrado(user)) {
            diverror.innerHTML = " ";
            diverror.classList.add("diverrorvisible");
            registrocorrecto.classList.remove("pulse");
            mostrarPopup("El usuario ya existe");
        }
        else {
            passerror.innerHTML = " ";
            mostrarPopup("Las contraseñas no coinciden");
        }
    }
}
function mostrarPopup(mensaje) {
    // Busca el elemento donde irá el mensaje y actualiza su contenido
    document.getElementById("popup-message").textContent = mensaje;

    // Muestra el pop-up quitando la clase "hidden"
    document.getElementById("popup-error").classList.remove("hidden");
}

// Ocultar el pop-up cuando se hace clic en el botón de cerrar
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("popup-error").classList.add("hidden");
});
function redireccionar() {
    window.location = "home.html";
}

function estaRegistrado(user) {
    let registrado = false;
    if (usuarios.length > 0) {
        let i = 0;
        while (i < usuarios.length && !registrado) {
            if (usuarios[i].nombre == user.nombre && usuarios[i].email == user.email) {
                registrado = true;
            }
        }
    }
    return registrado;
}

let captcha = document.querySelector("#captcharectangulo");
captcha.addEventListener('click', captchacompletado);
let completo = false;

function captchacompletado() {
    let img = captcha.firstChild; // toma la imagen que esta del boton capthca
    img.classList.remove('icoerrorhidden');
    img.classList.add('tickvisible');
    completo = true;
    return completo
}




