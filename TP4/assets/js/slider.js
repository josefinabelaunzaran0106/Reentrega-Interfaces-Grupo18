const img = document.getElementById("slider-img");

const imgs = [
  "assets/images/Section La app más divertida y educativa y para niños de 3 años/img1.png",
  "assets/images/Section La app más divertida y educativa y para niños de 3 años/img2.png",
  "assets/images/Section La app más divertida y educativa y para niños de 3 años/img3.png",
];

let current = 0;

function cambiarImg() {
  // Fade out current image
  img.style.opacity = 0;

  // After fade out, change source and fade back in
  setTimeout(() => {
    current = (current + 1) % imgs.length;
    img.src = imgs[current];

    // Slight delay to ensure image loads before fading in
    setTimeout(() => {
      img.style.opacity = 1;
    }, 50);
  }, 500);
}

// Ensure the initial CSS supports the fade effect
img.style.transition = "opacity 0.5s ease";

setInterval(cambiarImg, 3000);
