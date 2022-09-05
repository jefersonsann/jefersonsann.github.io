// Imports JS
import Portfolio from './portfolio.js';
import MenuActive from './menuActive.js';

// Init JS
Portfolio();
MenuActive();

// Anima name hover
const animaName = document.querySelector('#animaName');

function animaNameFunc() {
  animaName.classList.add('rubberBand');
  animaName.classList.remove('blast');

  // reset the animaName after a short delay
  setTimeout(() => {
    animaName.classList.remove('rubberBand');
  }, 500);
  clearTimeout(animaName);
}
animaName.addEventListener('mouseover', animaNameFunc);

//  mobile button
const menu = document.querySelector('#menu');
const btnMobile = document.querySelector('.mbtn');

function handleMenu(event) {
  event.preventDefault();
  btnMobile.classList.toggle('ativo');
  menu.classList.toggle('ativo');
}
btnMobile.addEventListener('click', handleMenu);

// Anima section enter
const anima = document.querySelectorAll('.js-scroll');
// const metadeScroll = window.innerHeight * 0;

function animaScroll() {
  anima.forEach((event) => {
    const sectionTop = event.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - window.innerHeight < 0;
    if (isSectionVisible) {
      event.classList.add('ativo');
    } else {
      event.classList.remove('ativo');
    }
  });
}

addEventListener('scroll', animaScroll);
