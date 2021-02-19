
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

// let isOpen = true;

hamburgerOpen.addEventListener('click', () => {

    if(products.classList.contains('navigation__hamburger--link-animationIn') 
    || about.classList.contains('navigation__hamburger--link-animationIn') 
    || testimonials.classList.contains('navigation__hamburger--link-animationIn') 
    || contact.classList.contains('navigation__hamburger--link-animationIn')){
        products.classList.toggle('navigation__hamburger--link-animationIn')
        about.classList.toggle('navigation__hamburger--link-animationIn')
        testimonials.classList.toggle('navigation__hamburger--link-animationIn')
        contact.classList.toggle('navigation__hamburger--link-animationIn')
    }


        // products.classList.toggle('navigation__hamburger--animationOut')
        // about.classList.toggle('navigation__hamburger--animationOut')
        // testimonials.classList.toggle('navigation__hamburger--animationOut')
        // contact.classList.toggle('navigation__hamburger--animationOut')

        // hambNav.classList.add('navigation__hamburger--animationOut')
        hamburgerOpen.classList.toggle('is-active');
        hambNav.classList.toggle('navigation__hamburger--visible');
        body.classList.toggle('locked');
        // setTimeout(() => {
            
        //     // products.classList.remove('navigation__hamburger--animationOut')
        //     // about.classList.remove('navigation__hamburger--animationOut')
        //     // testimonials.classList.remove('navigation__hamburger--animationOut')
        //     // contact.classList.remove('navigation__hamburger--animationOut')
        // }, 600);

    
        products.classList.toggle('navigation__hamburger--link-animationIn')
        setTimeout(() => {
            about.classList.toggle('navigation__hamburger--link-animationIn')
        }, 200);
        setTimeout(() => {
            testimonials.classList.toggle('navigation__hamburger--link-animationIn')
        }, 400);
        setTimeout(() => {
            contact.classList.toggle('navigation__hamburger--link-animationIn')
        }, 600);
    

})

products.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
    // products.classList.remove('navigation__hamburger--link-animationIn')
    
})

about.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
    // about.classList.remove('navigation__hamburger--link-animationIn')
})

testimonials.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
    // testimonials.classList.remove('navigation__hamburger--link-animationIn')
})

contact.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
    // contact.classList.remove('navigation__hamburger--link-animationIn')
})

logo.addEventListener('click', ()=>{
    hamburgerOpen.classList.toggle('is-active');
    hambNav.classList.toggle('navigation__hamburger--visible');
    body.classList.toggle('locked')
    // products.classList.remove('navigation__hamburger--link-animationIn')
    // about.classList.remove('navigation__hamburger--link-animationIn')
    // testimonials.classList.remove('navigation__hamburger--link-animationIn')
    // contact.classList.remove('navigation__hamburger--link-animationIn')
})
