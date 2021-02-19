import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Hi there 👋');


const hamburgerOpen = document.querySelector(".hamburger__js");
const hambNav = document.querySelector(".navigation__hamburger");

const hamburgerItem = document.querySelector('.navigation__hamburger--list-item');

hamburgerOpen.addEventListener('click', (e) => {
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
})

hamburgerItem.addEventListener('click', (e)=>{
    console.log('xddd')
})

// const body = document.querySelector(".body");

// const hamburger = document.querySelector('.hamburger');
// const hamburgerMenu = document.querySelector('.navigation__hamburger');

// const products = document.querySelector('.hamburger__products');
// const about = document.querySelector('.hamburger__about');
// const testimonials = document.querySelector('.hamburger__testimonials');
// const contact = document.querySelector('.hamburger__contact');

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