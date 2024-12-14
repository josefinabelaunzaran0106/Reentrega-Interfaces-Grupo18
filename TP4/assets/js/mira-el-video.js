/*
window.addEventListener("scroll", function () {
    const video = document.querySelector(".parallax-video");
    const image = document.querySelector(".parallax-img");
    const container = document.getElementById("mira-el-video");
    const rect = container.getBoundingClientRect();

    // Detecta si el contenedor está visible en el viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // animacion de entrada
        // Agrega las clases para iniciar las animaciones
        video.classList.add("visible");
        image.classList.add("visible");
    }
});
*/

const video = document.getElementById("video");
const image = document.getElementById("img-tres");

window.addEventListener("load", function () {
  video.style.transform = `translateX(${-275}px)`;
  image.style.transform = `translateX(400px)`;
});

window.addEventListener("scroll", function () {
  let started = false;

  if (window.scrollY > 14000) {
    video.style.transform = `translateX(${0}px)`;
    image.style.transform = `translateX(0)`;
  }

  if (
    this.window.devicePixelRatio > 1 &&
    window.devicePixelRatio <= 1.5 &&
    !started
  ) {
    if (window.scrollY > 12000) {
      started = true;
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  } else if (
    this.window.devicePixelRatio >= 2 &&
    window.devicePixelRatio <= 2.5 &&
    !started
  ) {
    if (window.scrollY > 8000) {
      started = true;
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  } else if (this.window.devicePixelRatio >= 2.5 && !started) {
    if (window.scrollY > 12000) {
      started = true;
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  }

  console.log(window.devicePixelRatio);
  console.log(window.scrollY);

  // 1.25 12.000
  // 1
  // 2
  // 2.5
});
