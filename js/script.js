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