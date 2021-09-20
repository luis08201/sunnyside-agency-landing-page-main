const menu = document.querySelector('.header__menuToggle');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('active');
})
