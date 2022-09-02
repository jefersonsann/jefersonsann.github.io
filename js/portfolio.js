export default function Portfolio() {
  const PortfolioCard = document.querySelector('.portfolio__card');

  const fetchPortfolio = async (url) => {
    const res = await fetch(url);
    const portJSON = await res.json();

    portJSON.forEach((portf) => {
      const divPort = createPortfolio(portf);
      document.querySelector('.portfolio').appendChild(divPort);
    });
  };

  const createPortfolio = ({ id, title, image, description }) => {
    const div = document.createElement('div');
    div.classList.add('portfolio__card');
    div.innerHTML = `
      <div class="portfolio__card--item" key="${id}">
        ${
          image &&
          `
          <div class="portfolio__card--image">
            <img src="${image}" alt="${title}" />
          </div>
        `
        }          
        ${
          description &&
          `<div class="portfolio__card--desc">${description}</div>`
        }          
      </div>
      `;
    return div;
  };

  fetchPortfolio('../portfolio.json');
}
