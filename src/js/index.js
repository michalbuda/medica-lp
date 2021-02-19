import '../scss/main.scss';

console.log('Hi there 👋');

const body = document.querySelector(".body");
const hamburgerOpen = document.querySelector(".hamburger__js");
const hambNav = document.querySelector(".navigation__hamburger");

const logo = document.querySelector('.logo__js');
const products = document.querySelector('.navigation__products');
const about = document.querySelector('.navigation__about');
const testimonials = document.querySelector('.navigation__testimonials');
const contact = document.querySelector('.navigation__contact');

hamburgerOpen.addEventListener('click', () => {
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})

products.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})

about.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})

testimonials.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})

contact.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})

logo.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
})
