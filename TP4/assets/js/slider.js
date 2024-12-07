const img = document.getElementById('slider-img');

const imgs = [
    'assets/images/Section La app más divertida y educativa y para niños de 3 años/img1.png',
    'assets/images/Section La app más divertida y educativa y para niños de 3 años/img2.png',
    'assets/images/Section La app más divertida y educativa y para niños de 3 años/img3.png'
];

let current = 0;

function cambiarImg() {
    current = (current + 1) % imgs.length;
    img.src = imgs[current];
}

setInterval(cambiarImg, 3000);
