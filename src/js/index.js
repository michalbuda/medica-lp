import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Hi there 👋');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) =>{
    hamburger.classList.toggle('is-active')
})