import Swiper from '../../node_modules/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: '.album__right',
    prevEl: '.album__left',
  },
});


export default swiper;