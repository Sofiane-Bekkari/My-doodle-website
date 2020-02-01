const burger = document.querySelector(".burger");
const showMobile = document.querySelector('.show-desk');
const linkBurger = document.querySelectorAll(".line");

burger.addEventListener('click', () => {
    showMobile.classList.toggle('show-mobile');
    burger.classList.toggle('change')
});