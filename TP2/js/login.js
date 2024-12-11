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
        mostrarPopupElement('<span class="check-icon">✔️</span> Logueado con éxito');
        setTimeout("redireccionar()", 3000);
    }

    else if (nombreLogin != userLogin.name && contraLogin == userLogin.password) {
        console.log("nombre incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> Nombre de usuario incorrecto');

    }
    else if (nombreLogin == userLogin.name && contraLogin != userLogin.password) {
        console.log("nombre incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> Contraseña incorrecta');

    }
    else {
        console.log("incorrecto");
        mostrarPopupElement('<span class="error-icon">❌</span> Nombre de usuario y contraseña incorrecta');
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
function mostrarPopupElement(contenido) {
    document.getElementById("popup-message").innerHTML = contenido;
    document.getElementById("popup-error").classList.remove("hidden");
}
function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
