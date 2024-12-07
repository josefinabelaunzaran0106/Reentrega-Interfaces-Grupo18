const elements = [
    { id: document.getElementById('fn1'), speed: 2 },
    { id: document.getElementById('fn2'), speed: 1.3 },
    { id: document.getElementById('fn3'), speed: 0.9 }
];

const screenWidth = window.innerWidth;

// Función para mover los elementos horizontalmente
function moveElements() {
    elements.forEach((element) => {
        // Obtiene la posición actual del elemento
        const currentLeft = parseFloat(getComputedStyle(element.id).left) || 0;

        // Calcula la nueva posición
        const newLeft = currentLeft + element.speed;

        // Si el elemento sale del viewport, reinícialo a la izquierda
        if (newLeft > screenWidth) {
            element.id.style.left = `-${element.id.offsetWidth}px`; // Reinicia a la izquierda
        } else {
            element.id.style.left = `${newLeft}px`; // Mueve a la derecha
        }
    });

    // Llama a la función de nuevo para mantener el loop
    requestAnimationFrame(moveElements);
}

// Inicia el movimiento
moveElements();
