// Funcion temporal para probar el cambio de icono grande a icono chiquito y de ahi hacer el sticky
const logo = document.getElementById("logo-hero");

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        const scrollPosition = window.scrollY;
        logo.className = 'logo-hero-small';

    } else {
        logo.className = 'logo-hero-big';
    }
});
