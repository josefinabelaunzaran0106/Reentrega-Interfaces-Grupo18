window.addEventListener('scroll', function () {
    const video = document.querySelector('.parallax-video');
    const image = document.querySelector('.parallax-img');
    const container = document.getElementById('mira-el-video');
    const rect = container.getBoundingClientRect();

    // Detecta si el contenedor está visible en el viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Agrega las clases para iniciar las animaciones
        video.classList.add('visible');
        image.classList.add('visible');
    }
});

