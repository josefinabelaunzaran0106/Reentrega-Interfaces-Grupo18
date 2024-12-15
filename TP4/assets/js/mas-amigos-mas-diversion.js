/* ---------- logica para la seccion de "mas amigos, mas diversion" ---------- */
/*
    aca el observer va a detectar que seccion esta visible en el viewport
    y va a cambiar la clase 'active' a la seccion que esta visible
*/
const sections = document.querySelectorAll('.char-info');
const images = document.querySelectorAll('.character-img');
const headerHeight = document.querySelector('header')?.offsetHeight || 0;
const stickyColumn = document.querySelector('.sticky-column');

let currentIndex = 0;
const observerStickySections = new IntersectionObserver(
    (entries) => { 
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);

                // Actualiza las clases activas solo si cambia la sección
                if (currentIndex !== index) {
                    sections[currentIndex].classList.remove('active');
                    images[currentIndex].classList.remove('active');

                    sections[index].classList.add('active');
                    images[index].classList.add('active');

                    currentIndex = index;
                }
            }
        });
    },
    {
        root: null, 
        rootMargin: `-${headerHeight}px 0px 0px 0px`, // Considera el header
        threshold: 0.4, // Activa cuando el 40% de la sección es visible
    }
);

sections.forEach((section) => observerStickySections.observe(section));