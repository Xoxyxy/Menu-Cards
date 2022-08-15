const menuBtn = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__drop')

if (menuBtn && menuBody) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__icon--active')
    menuBody.classList.toggle('menu__drop--active')
  })

  document.addEventListener('click', e => {
    if (!menuBody.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.classList.remove('menu__icon--active')
      menuBody.classList.remove('menu__drop--active')
    }
  })
}

const dropBtn = document.querySelector('.nav__link--drop')
const dropMenu = document.querySelector('.nav__drop')

if (dropBtn && dropMenu) {
  dropBtn.addEventListener('mouseenter', () => {
    dropBtn.classList.toggle('nav__link--active')
    dropMenu.classList.toggle('nav__drop--active')
  })
  dropMenu.addEventListener('mouseleave', () => {
    dropBtn.classList.toggle('nav__link--active')
    dropMenu.classList.toggle('nav__drop--active')
  })
}

if (document.documentElement.clientWidth < 480) {
  const menuItem = document.querySelector('.menu__item')
  const menuList = document.querySelector('.menu__list')
  const menuListRight = document.querySelector('.menu__list--right')
  const menuImg = document.querySelector('.menu__img')

  menuItem.addEventListener('click', () => {
    menuListRight.classList.toggle('menu__list--active')
    menuListRight.classList.toggle('menu__list')
    menuList.classList.toggle('menu__list-left--active')
    menuImg.classList.toggle('menu__img--active')
    menuItem.classList.toggle('menu__item--active')
  })

}
