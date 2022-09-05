const menuActive = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const selector = '.menu__nav ul li a';
    const element = Array.from(document.querySelectorAll(selector));
    const navigation = document.querySelector('.menu__nav ul');

    const handleActive = (evt) => {
      const target = evt.target;

      if (!target || !target.matches(selector)) {
        return;
      }

      element.forEach((elem) => elem.classList.remove('active'));

      evt.target.classList.add('active');
    };

    navigation.addEventListener('mousedown', handleActive);
  });
};

export default menuActive;
