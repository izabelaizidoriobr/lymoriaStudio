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

/* =========================================================
   FAQ - ABRIR E FECHAR PERGUNTAS
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");


        /* Fecha todos os outros */

        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const otherQuestion =
                otherItem.querySelector(".faq-question");

            const otherIcon =
                otherItem.querySelector(".faq-icon");

            otherQuestion.setAttribute("aria-expanded", "false");

            otherIcon.textContent = "+";

        });


        /* Abre o selecionado */

        if (!isActive) {

            item.classList.add("active");

            question.setAttribute("aria-expanded", "true");

            icon.textContent = "×";

        }

    });

});

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", () => {

        const inicio = document.getElementById("inicio");

        if (inicio) {
            inicio.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }

    });

}