const btnLeft = document.querySelector(".btn-left-cards"),
      btnRight = document.querySelector(".btn-right-cards"),
      slider = document.querySelector(".cincocards"),
      sliderOculto = document.querySelector(".cincocards-ocultas"); // El contenedor de las tarjetas ocultas

let currentIndex = 0;
const cardsToShow = 5; // Número de tarjetas visibles
const cardWidth = document.querySelector('.card').offsetWidth + 30; // Ancho de la tarjeta + márgenes

// Inicialmente ocultamos el botón izquierdo
btnLeft.style.display = 'none';

// Manejamos el clic en la flecha derecha
btnRight.addEventListener("click", () => moveToRight());

// Manejamos el clic en la flecha izquierda
btnLeft.addEventListener("click", () => moveToLeft());

function moveToRight() {
    // Aseguramos que no se mueva más allá de la cantidad de tarjetas visibles
    if (currentIndex >= slider.children.length - cardsToShow) {
        currentIndex = 0;
        slider.style.transform = `translateX(0)`;
        slider.style.transition = "none"; // Elimina la transición para un salto directo
        return;
    }
    currentIndex++; // Avanzamos al siguiente conjunto de tarjetas
    let offset = currentIndex * cardWidth;
    slider.style.transform = `translateX(-${offset}px)`; // Desplazamos el carrusel
    slider.style.transition = "all ease .6s"; // Agregamos una transición suave

    // Mostramos la flecha izquierda cuando estamos más allá de la primera tarjeta
    if (currentIndex > 0) {
        btnLeft.style.display = 'block';
    }

    // Si estamos al final de las tarjetas, ocultamos la flecha derecha
    if (currentIndex >= slider.children.length - cardsToShow) {
        btnRight.style.display = 'none';
    }
}

function moveToLeft() {
    // Si estamos al principio, regresamos al final
    if (currentIndex <= 0) {
        currentIndex = slider.children.length - cardsToShow;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        slider.style.transition = "none"; // Elimina la transición para un salto directo
        return;
    }
    currentIndex--; // Retrocedemos al conjunto de tarjetas anterior
    let offset = currentIndex * cardWidth;
    slider.style.transform = `translateX(-${offset}px)`; // Desplazamos el carrusel
    slider.style.transition = "all ease .6s"; // Transición suave

    // Mostramos la flecha derecha si no estamos en el primer grupo
    if (currentIndex < slider.children.length - cardsToShow) {
        btnRight.style.display = 'block';
    }

    // Si estamos en el primer conjunto de tarjetas, ocultamos la flecha izquierda
    if (currentIndex === 0) {
        btnLeft.style.display = 'none';
    }
}


