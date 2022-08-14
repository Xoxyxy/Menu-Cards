const menuBtn = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__drop');

if (menuBtn && menuBody) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__icon--active');
    menuBody.classList.toggle('menu__drop--active');
  });
}

const dropBtn = document.querySelector('.nav__link--drop');
const dropMenu = document.querySelector('.nav__drop');

if (dropBtn && dropMenu) {
  dropBtn.addEventListener('click', () => {
    dropBtn.classList.toggle('nav__link--active');
    dropMenu.classList.toggle('nav__drop--active');
  });
  document.body.addEventListener("click", e => {
    if (e.target !== dropBtn) {
      if (e.target.classList.contains('nav__drop')) {
        return;
      }
      dropBtn.classList.remove('nav__link--active');
      dropMenu.classList.remove('nav__drop--active');
    }
  });
}