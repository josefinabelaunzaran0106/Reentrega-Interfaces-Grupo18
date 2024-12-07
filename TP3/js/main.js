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
        mostrarPopup('<span class="check-icon">✔️</span> Se ha registrado con éxito');
        setTimeout("redireccionar()", 3000);
    }
    else {
        if (estaRegistrado(user)) {
            diverror.innerHTML = " ";
            diverror.classList.add("diverrorvisible");
            registrocorrecto.classList.remove("pulse");
            mostrarPopup('<span class="error-icon">❌</span> El usuario ya existe');
        }
        else {
            passerror.innerHTML = " ";
            mostrarPopup('<span class="error-icon">❌</span> Las contraseñas no coinciden');
        }
    }
}
function mostrarPopup(mensaje) {
    // Busca el elemento donde irá el mensaje y actualiza su contenido
    document.getElementById("popup-message").innerHTML = mensaje;

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
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}


// boton rebelde
        // Selecciona el botón usando la clase
        let button = document.querySelector(".btn-right-cards");
        let lastWidth = window.innerWidth;

        // Bucle infinito para ajustar posición del botón
        function adjustButtonPosition() {
            let currentWidth = window.innerWidth;

            // Mueve el botón en función del cambio en el ancho de la ventana
            if (currentWidth < lastWidth) {
                // Si hay zoom out (menos ancho)
                button.style.right = `${parseInt(button.style.right) + 5}px`;
            } else if (currentWidth > lastWidth) {
                // Si hay zoom in (más ancho)
                button.style.right = `${Math.max(parseInt(button.style.right) - 5, 10)}px`;
            }

            // Actualiza el último ancho registrado
            lastWidth = currentWidth;

            // Ejecuta nuevamente el ajuste después de un pequeño retraso
            setTimeout(adjustButtonPosition, 100);
        }

        // Inicia el ajuste de la posición del botón
        adjustButtonPosition();


