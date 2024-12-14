let uno = document.getElementById("gif-uno");
let cuatro = document.getElementById("gif-cuatro");
let nueve = document.getElementById("gif-nueve");

function animateSprite() {
  let spritesUno = [
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_00_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_01_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_02_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_03_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_04_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_05_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_06_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_07_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_08_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_09_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_10_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_11_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_12_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_13_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_14_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_15_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_16_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_17_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_18_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_19_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_20_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_21_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_22_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_23_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_24_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_25_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_26_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_27_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_28_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_29_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_30_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_31_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_32_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_33_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_34_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_35_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_36_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_37_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_38_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/1/frame_39_delay-0.04s.png",
  ];

  let spritesCuatro = [
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_00_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_01_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_02_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_03_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_04_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_05_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_06_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_07_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_08_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_09_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_10_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_11_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_12_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_13_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_14_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_15_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_16_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_17_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_18_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_19_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_20_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_21_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_22_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_23_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_24_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_25_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_26_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_27_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_28_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_29_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_30_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_31_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_32_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_33_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_34_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_35_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_36_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_37_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_38_delay-0.04s.png",
    "assets/images/Seccion sprite-sheet/nuevos/4/frame_39_delay-0.04s.png",
  ];

  let spritesNueve = [
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_00_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_01_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_02_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_03_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_04_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_05_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_06_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_07_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_08_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_09_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_10_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_11_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_12_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_13_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_14_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_15_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_16_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_17_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_18_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_19_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_20_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_21_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_22_delay-0.06s.png",
    "assets/images/Seccion sprite-sheet/nuevos/9/frame_23_delay-0.06s.png",
  ];

  let index = 0;
  let index2 = 0;

  // Cambia la imagen cada 300ms
  setInterval(function () {
    uno.src = spritesUno[index];
    cuatro.src = spritesCuatro[index];
    nueve.src = spritesNueve[index2];

    index = (index + 1) % spritesUno.length; // Esto reinicia el índice al llegar al final del array
    index2 = (index2 + 1) % spritesNueve.length; // Esto reinicia el índice al llegar al final del array
  }, 30); // 300ms entre cada cambio de imagen
}

// Inicia la animación
animateSprite();
