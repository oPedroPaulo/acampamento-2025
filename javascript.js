const toggleButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-mobile');

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('ativo');
});
