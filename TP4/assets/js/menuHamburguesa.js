const menuToggle = document.getElementById('menu-cerrado');
const menuOpen = document.getElementById('menu-abierto');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOpen.classList.toggle('active'); // Toggle la clase 'active' para mostrar u ocultar el menú
});

// cierra el menu, si me lo olvido abierto y hago scroll
window.addEventListener('scroll', () => {
    if (menuOpen.classList.contains('active')) {
        menuToggle.classList.remove('active');
        menuOpen.classList.remove('active');
    }
});

