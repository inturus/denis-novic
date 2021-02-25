const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.header__list');
const headMenu = document.querySelector('.header__menu');
const items = document.querySelectorAll('.header__list li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    headMenu.classList.toggle("open");
})