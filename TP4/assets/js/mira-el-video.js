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

/*
window.addEventListener("load", function () {
  video.style.transform = `translateX(${-275}px)`;
  image.style.transform = `translateX(400px)`;
});

window.addEventListener("scroll", function () {
  if ((window.devicePixelRatio = 1)) {
    console.log("TRIGGER 1");
    if (window.scrollY > 12000) {
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  } else if ((window.devicePixelRatio = 1.5)) {
    console.log("TRIGGER 1.5");
    if (window.scrollY > 4000) {
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  } else if ((window.devicePixelRatio = 2)) {
    console.log("TRIGGER 2");
    if (window.scrollY > 8000) {
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  } else if ((window.devicePixelRatio = 2.5)) {
    console.log("TRIGGER 2.5");
    if (window.scrollY > 6000) {
      video.style.transform = `translateX(${0}px)`;
      image.style.transform = `translateX(0)`;
    }
  }

  console.log("DEVICE PIXEL RATIO: " + window.devicePixelRatio);
  console.log("SCROLL Y: " + window.scrollY);

  // 1.25 12.000
  // 1
  // 2
  // 2.5
});
*/

const video = document.getElementById("video");
const image = document.getElementById("img-tres");

window.addEventListener("scroll", () => {
  const scrollNormalized = window.scrollY / document.body.clientHeight;
  const triggerPoint = 0.6; // Porcentaje del documento donde se activa

  console.log("SCROLL NORMALIZED: " + scrollNormalized);
  console.log("TRIGGER POINT: " + triggerPoint);

  if (scrollNormalized > triggerPoint) {
    video.style.transform = `translateX(${0}px)`;
    image.style.transform = `translateX(0)`;
  } else {
    video.style.transform = `translateX(${-275}px)`;
    image.style.transform = `translateX(400px)`;
  }
});
