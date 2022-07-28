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
