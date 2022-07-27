const sections = document.querySelectorAll('.js-scroll');
const metadeScroll = window.innerHeight * 1.2;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - metadeScroll < 0;
    if (isSectionVisible) {
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  });
}

addEventListener('scroll', animaScroll);
