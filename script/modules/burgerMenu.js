const body = document.querySelector('body');
const menuList = body.querySelector('.header__menu');
const iconBurger = body.querySelector('.icon-burger');
const navBtn = body.querySelector('.nav-btn');

navBtn.style.cssText = `
width: 40px;
height: 30px;
`;

body.addEventListener('click', ({ target }) => {
  if (target.closest('.nav-btn')) {
    menuList.classList.toggle('header__menu_active');
    iconBurger.classList.toggle('active');
  }

  if (
    target.classList.contains('header__link') ||
    (!target.classList.contains('header__menu_active') && !target.closest('.nav-btn'))
  ) {
    menuList.classList.remove('header__menu_active');
    iconBurger.classList.remove('active');
  }


});

