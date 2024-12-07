// elementos de la seccion
const textcontainer1 = document.getElementById('text-container1');
const textcontainer2 = document.getElementById('text-container2');

const slider = document.getElementById('slider-img');

const personajeverde = document.getElementById('img-personajeverde');
const personajeazul = document.getElementById('img-personajeazul');

const card1 = document.getElementById('img-cards-1');
const card2 = document.getElementById('img-cards-2');
const card3 = document.getElementById('img-cards-3');

const card1P = document.getElementById('p-card1');
const card2P = document.getElementById('p-card2');
const card3P = document.getElementById('p-card3');

// posicion inicial (deben estar inicialmente afuera y moverse hacia el centro)
textcontainer1.style.transform = 'translateX(-500px)';
textcontainer2.style.transform = 'translateX(-500px)';
personajeazul.style.transform = 'translateX(500px)';

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY - 250;


    // Move textcontainer1 from left to right as you scroll
    const moveInDistance1 = Math.min(scrollPosition, 500); // Max distance it should move in
    const moveInDistance2 = Math.min(scrollPosition * 0.85, 500);
    textcontainer1.style.transform = `translateX(${moveInDistance1 - 500}px)`;
    textcontainer2.style.transform = `translateX(${moveInDistance2 - 500}px)`;

    const moveOutDistance = Math.max(500 - scrollPosition, 0); // Max distance it should move out
    personajeazul.style.transform = `translateX(${moveOutDistance}px)`;

    const moveUpDistance = Math.max(300 - scrollPosition * 0.5, 0); // Adjust speed with multiplier
    personajeverde.style.transform = `translateY(${moveUpDistance}px)`;

});


