import Inputmask from '../../node_modules/inputmask/dist/inputmask.es6.js';

export const reservationPhoneMask = document.querySelector('#reservation__phone');
const phoneMask = new Inputmask('+7 (999) 999-99-99');
phoneMask.mask(reservationPhoneMask);

