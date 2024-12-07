// Elementos de la sección
const img1 = document.getElementById('img-cards-1');
const p1 = document.getElementById('p-card1');

const img2 = document.getElementById('img-cards-2');
const p2 = document.getElementById('p-card2');

const img3 = document.getElementById('img-cards-3');
const p3 = document.getElementById('p-card3');


// Coloca inicialmente las tarjetas fuera de la vista (abajo)
img1.style.transform = 'translateY(100px)';
p1.style.transform = 'translateY(100px)';

img2.style.transform = 'translateY(100px)';
p2.style.transform = 'translateY(100px)';

img3.style.transform = 'translateY(100px)';
p3.style.transform = 'translateY(100px)';


// Inicialmente establece la opacidad de las tarjetas a 0
img1.style.opacity = '0';
p1.style.opacity = '0';

img2.style.opacity = '0';
p2.style.opacity = '0';

img3.style.opacity = '0';
p3.style.opacity = '0';

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY - 900;

    if(scrollPosition > 350){
    setTimeout(() => {
        img1.style.opacity = '1';
        p1.style.opacity = '1';
        img1.style.transform = 'translateY(0)';
        p1.style.transform = 'translateY(0)';
    }, 0);

    setTimeout(() => {
        img2.style.opacity = '1';
        p2.style.opacity = '1';
        img2.style.transform = 'translateY(0)';
        p2.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        img3.style.opacity = '1';
        p3.style.opacity = '1';
        img3.style.transform = 'translateY(0)';
        p3.style.transform = 'translateY(0)';
    }, 1000);
    }
    img1.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    p1.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    img2.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    p2.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    img3.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    p3.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';

    if(scrollPosition < 500){
        img1.style.opacity = '0';
        p1.style.opacity = '0';
        img2.style.opacity = '0';
        p2.style.opacity = '0';
        img3.style.opacity = '0';
        p3.style.opacity = '0';
    }
});
