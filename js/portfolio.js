export default function Portfolio() {
  const fetchPortfolio = async (url) => {
    const res = await fetch(url);
    const portJSON = await res.json();

    portJSON.forEach((portf) => {
      const divPort = createPortfolio(portf);
      document.querySelector('.portfolio').appendChild(divPort);
    });
  };

  const createPortfolio = ({ id, title, link, image }) => {
    const div = document.createElement('div');
    div.classList.add('portfolio__card');
    div.innerHTML = `
      <div class="portfolio__card--item" key="${id}">
      ${
        title === 'skeleton'
          ? '<div class="skeleton"><span>Em brave...</span></div>'
          : `
          <a href="${link}" alt="${title}">
            ${
              image &&
              `
          <div class="portfolio__card--image" style="background-image: url(${image});">
          </div>
        `
            }
          </a>
        `
      } 
      </div>
      `;
    return div;
  };

  fetchPortfolio('../portfolio.json');
}
