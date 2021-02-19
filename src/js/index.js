import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Hi there 👋');

const body = document.querySelector(".body");
const hamburgerOpen = document.querySelector(".hamburger__js");
const hambNav = document.querySelector(".navigation__hamburger");

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

// const body = document.querySelector(".body");

// const hamburger = document.querySelector('.hamburger');
// const hamburgerMenu = document.querySelector('.navigation__hamburger');



// hamburger.addEventListener('click', (e) =>{
//     body.classList.toggle('locked');
//     hamburger.classList.toggle('is-active');
//     hamburgerMenu.classList.toggle('navigation__hamburger--visible');
// })

// products.addEventListener('click', (e) => {
//     console.log('kliknales kurwa jego mac')
//     body.classList.remove('locked');
//     hamburger.classList.remove('is-active');
//     hamburgerMenu.classList.remove('navigation__hamburger--visible');

//     body.classList.remove('locked');
// })