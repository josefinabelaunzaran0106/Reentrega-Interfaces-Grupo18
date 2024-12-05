document.addEventListener("DOMContentLoaded", function() {
    const btnRight = document.querySelector(".btn-right-cards");
    const btnLeft = document.querySelector(".btn-left-cards");
    const carrusel = document.querySelector(".cincocards");
    const allCards = document.querySelectorAll(".card");
    let currentIndex = 0;

    // Inicialmente, solo las primeras 5 cards son visibles
    for (let i = 5; i < allCards.length; i++) {
        allCards[i].classList.add("cardhidden");
    }

    // Muestra las siguientes 5 cards al hacer clic en la flecha derecha
    btnRight.addEventListener("click", function() {
        // Mostrar las siguientes 5 cards
        const hiddenCards = document.querySelectorAll(".cardhidden");
        if (hiddenCards.length > 0) {
            for (let i = currentIndex + 5; i < currentIndex + 10 && i < allCards.length; i++) {
                allCards[i].classList.remove("cardhidden");
            }
            currentIndex += 5;

            // Si no hay más cards ocultas, desactivar el botón derecho
            if (currentIndex + 5 >= allCards.length) {
                btnRight.style.display = "none";
            }

            // Mostrar el botón izquierdo
            btnLeft.style.display = "flex";
        }
    });

    // Muestra las cards anteriores al hacer clic en la flecha izquierda
    btnLeft.addEventListener("click", function() {
        if (currentIndex > 5) {
            for (let i = currentIndex - 1; i >= currentIndex - 5; i--) {
                allCards[i].classList.add("cardhidden");
            }
            currentIndex -= 5;

            // Si las cards han vuelto al principio, ocultar el botón izquierdo
            if (currentIndex <= 0) {
                btnLeft.style.display = "none";
            }

            // Mostrar el botón derecho
            btnRight.style.display = "flex";
        }
    });
});

