const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});