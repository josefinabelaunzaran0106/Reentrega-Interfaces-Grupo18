window.addEventListener("load", function () {
    const blocks = document.querySelectorAll('.block');
    let currentBlock = 0;

    // Crear el elemento de audio en JS
    const audio = new Audio("./assets/cancion/Numberblocks - Intro (Español Latinoamericano) [HD].mp3");

    // Función para iluminar los bloques secuencialmente
    function lightUpBlock() {
        if (currentBlock < blocks.length) {
            blocks[currentBlock].classList.add('on'); // Ilumina el bloque
            currentBlock++;
        }
    }

    // Asegurarse de que el loader esté visible al cargar la página
    const loader = document.getElementById("loader");
    loader.style.display = "flex"; // Mostrar el loader inmediatamente

    // Reproducir la música mientras el loader esté activo
    audio.play();

    // Iluminar un bloque cada segundo
    const blockInterval = setInterval(lightUpBlock, 1000);

    // Detener la música y ocultar el loader después de 5 segundos
    setTimeout(function () {
        clearInterval(blockInterval); // Detenemos la secuencia de bloques
        audio.pause(); // Detenemos la música
        audio.currentTime = 0; // Retrocedemos la música al inicio
        loader.style.display = "none"; // Ocultar el loader después de 5 segundos
    }, 5500); // 5 segundos para ocultar el loader
});
