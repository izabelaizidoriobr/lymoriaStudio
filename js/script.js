const menuBtn = document.querySelector('.mobile-menu-btn');

const navMenu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {

    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    menuBtn.setAttribute('aria-expanded', !isExpanded);

    navMenu.classList.toggle('active');

});


// Fechar o menu ao clicar fora
document.addEventListener('click', (event) => {

    const clickedOutsideMenu =
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target);

    if (clickedOutsideMenu && navMenu.classList.contains('active')) {

        navMenu.classList.remove('active');

        menuBtn.setAttribute('aria-expanded', 'false');

    }

});


// Fechar o menu ao clicar em um link
const menuLinks = navMenu.querySelectorAll('a');

menuLinks.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

        menuBtn.setAttribute('aria-expanded', 'false');

    });

});

/* PARALLAX - CTA */

const ctaSection = document.querySelector(".cta-section");
const ctaBackground = document.querySelector(".cta-background");

function updateParallax() {

    if (!ctaSection || !ctaBackground) return;

    const sectionTop = ctaSection.offsetTop;
    const sectionHeight = ctaSection.offsetHeight;

    const scrollPosition = window.scrollY;

    const distance = scrollPosition - sectionTop;

    const movement = distance * 0.15;

    ctaBackground.style.transform = `translateY(${movement}px)`;
}


window.addEventListener("scroll", updateParallax);

window.addEventListener("load", updateParallax);