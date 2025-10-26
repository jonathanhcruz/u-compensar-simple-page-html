
const mobileMenuButton = document.querySelector('.menu__mobile-nav');
const mobileMenu = document.querySelector('.menu__nav');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__nav--active');
})