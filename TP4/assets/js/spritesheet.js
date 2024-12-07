
let spriteSheet = document.getElementById('sprite-sheett'); // Asegúrate de tener el elemento correcto

function animateSprite() {
    let sprites = [
        'assets/images/Seccion sprite-sheet/sps/uno.png',
        'assets/images/Seccion sprite-sheet/sps/dos.png',
        'assets/images/Seccion sprite-sheet/sps/tres.png',
        'assets/images/Seccion sprite-sheet/sps/cuatro.png'
    ];

    let index = 0;
    
    // Cambia la imagen cada 300ms
    setInterval(function() {
        console.log("cambio");
        spriteSheet.src = sprites[index];
        index = (index + 1) % sprites.length; // Esto reinicia el índice al llegar al final del array
    }, 100); // 300ms entre cada cambio de imagen
}

// Inicia la animación
animateSprite();
