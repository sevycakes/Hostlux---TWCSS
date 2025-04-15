// TOGGLE BUTTON

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});