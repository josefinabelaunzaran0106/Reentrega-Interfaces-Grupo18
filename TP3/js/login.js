let iconoerror = document.querySelector('.icoerrorhidden');
let diverror = document.querySelector("#diverror");
let passerror = document.querySelector(".diverrorcontravis");
let inputerror = document.querySelector('.contraseñaerror');
let labelerror = document.querySelector('#labelerror');
let registrocorrecto = document.querySelector(".hidden");
//form login 

let formLogin = document.querySelector('#formlogin');
console.log(formLogin);
formLogin.addEventListener("submit", verificarLogin);

function mostrarPopupExito() {
    const popupSuccess = document.getElementById("popup-success");
    popupSuccess.classList.remove("hidden");
    setTimeout(() => {
        popupSuccess.classList.add("hidden");
    }, 3000); // Oculta el popup después de 3 segundos
}
function verificarLogin(e) {
    e.preventDefault();

    let datos = new FormData(formLogin);
    console.log(datos);
    let nombreLogin = datos.get('name');
    let contraLogin = datos.get('password');

    let userLogin = {
        name: "usuario",
        password: "1234"
    }

    if (nombreLogin == userLogin.name && contraLogin == userLogin.password) {
        console.log("logueado correctamente");
        mostrarPopupElement('<span class="check-icon">✔️</span> LOGUEADO CON ÉXITO');
        setTimeout("redireccionar()", 3000);
    }

    else if (nombreLogin != userLogin.name && contraLogin == userLogin.password) {
        console.log("nombre incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> NOMBRE DE USUARIO INCORRECTO');

    }
    else if (nombreLogin == userLogin.name && contraLogin != userLogin.password) {
        console.log("nombre incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> CONTRASEÑA INCORRECTA');

    }
    else {
        console.log("incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> NOMBRE DE USUARIO Y CONTRASEÑA INCORRECTA');
    }
}
function mostrarPopup(mensaje) {
    const popup = document.getElementById("popup-error");
    const message = document.getElementById("popup-message");

    message.innerHTML = mensaje;
    popup.classList.remove("hidden");

    // Animación de entrada
    popup.style.animation = "pop-in 0.5s ease-out";
}

document.getElementById("close-btn").addEventListener("click", function () {
    const popup = document.getElementById("popup-error");

    // Animación de salida antes de ocultar
    popup.style.animation = "fade-out 0.5s ease-in";
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 500);
});

function redireccionar() {
    window.location = "home.html";
}
function mostrarPopupElement(contenido) {
    document.getElementById("popup-message").innerHTML = contenido;
    document.getElementById("popup-error").classList.remove("hidden");
}
function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
