// Seleccionamos todos los contenedores
const contenedores = document.querySelectorAll('.contenedor');

// Función para detectar qué contenedor está en el centro del viewport
function onScroll() {
    contenedores.forEach((contenedor) => {
        const rect = contenedor.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;

        if (isVisible) {
            // Activamos el contenedor visible
            contenedor.classList.add('active');
        } else {
            // Ocultamos los contenedores no visibles
            contenedor.classList.remove('active');
        }
    });
}

// Escuchamos el evento de scroll
window.addEventListener('scroll', onScroll);

// Mostrar el primer contenedor al cargar la página
window.onload = onScroll;
