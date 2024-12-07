const gameImage = document.getElementById('game-image');

document.getElementById('seis-numeros').addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = gameImage;
    const { offsetX: mouseX, offsetY: mouseY } = e;

    // Calcula la dirección opuesta al movimiento del ratón
    const moveX = (mouseX / width) - 0.5; // Movimiento en el eje X
    const moveY = (mouseY / height) - 0.5; // Movimiento en el eje Y

    // Ajusta el desplazamiento de la imagen en la dirección opuesta
    gameImage.style.transform = `translate(${moveX * -20}px, ${moveY * -20}px)`;
});