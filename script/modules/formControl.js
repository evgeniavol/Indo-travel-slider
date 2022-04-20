import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';
import {showModal} from './modal.js';
import {dbReservationControl, dbEmailControl} from './dbControl.js';
import {loadStyles} from './loadStyle.js';
import {reservationPhoneMask} from './inputMask.js';

export const reservationData = document.querySelector('.reservation__data');
export const reservationPrice = document.querySelector('.reservation__price');
const reservationInput = document.querySelector('.reservation__input');
const reservationPhone = document.querySelector('#reservation__phone');
const selectDataTour = document.querySelector('#reservation__date');
const selectPeopleCount = document.querySelector('#reservation__people');


let dataT = '';
let totalPrice = 0;
let tour = {
  dates: 0,
  people: 0,
};
const justValidate = new JustValidate('.reservation__form');
justValidate
  .addField('#reservation__date',
    [{
        rule: 'required',
        errorMessage: 'Выберите дату',
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: 'Некорректное значение',
      },
    ])
  .addField('#reservation__people',
    [{
        rule: 'required',
        errorMessage: 'Некорректное значение',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Некорректное значение',
      },
    ])
  .addField('.reservation__input_name', [{
      rule: 'required',
      errorMessage: 'Укажите ФИО полностью по-русски',
    },
    {
      rule: 'minLength',
      value: 5,
      errorMessage: 'Слишком короткое значение',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное значение',
    },
    {
      rule: 'customRegexp',
      value: /([А-Яа-яЁё]+)\s([А-Яа-яЁё]+)\s([А-Яа-яЁё]+)/g,
      errorMessage: 'Некорректное значение',
    },
  ])
  .addField('#reservation__phone', [{
      rule: 'required',
      errorMessage: 'Укажите свой телефон',
    },
    {
        validator(value) {
            const phone = reservationPhoneMask.inputmask.unmaskedvalue();
            return !!(Number(phone) && phone.length === 10);
        },
    }
  ])
  .onSuccess(async (e) => {
    e.preventDefault();
    modalControl(tour);
    return {tourData};
  
  
  })
export const modalControl = async (tour) => {
  await loadStyles('css/modal.css');

  const {
    overlayConfirm,
    modal
  } = showModal(tour);

  modal.addEventListener('click', ({
    target
  }) => {
    if (target.classList.contains('modal__btn_confirm')) {
      dbReservationControl(tour);
      overlayConfirm.classList.remove('is-visible');
    }
    if (target.classList.contains('modal__btn_edit'))
      overlayConfirm.classList.remove('is-visible');
  });
};


export const formReservationControl = (data) => {
  dataT = data;
  const form = document.querySelector('.reservation__form');
  reservationPrice.textContent = `${totalPrice}₽`;

  selectDataTour.addEventListener('change', (e) => {
    tour.dates = e.target.value;
    reservationData.textContent = `${tour.dates}, ${tour.people} человека`;
  });

  selectPeopleCount.addEventListener('change', (e) => {
    tour.people = e.target.value;
    reservationData.textContent = `${tour.dates}, ${tour.people} человека`;

    dataT.forEach((tourObj) => {
      if (tourObj.date === tour.dates) {
        tour.price = tourObj.price;
      }
    });
    totalPrice = Number(tour.price) * Number(tour.people);

    reservationPrice.textContent = `${totalPrice}₽`;
  });


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tourData = Object.fromEntries(formData);

    dataT.forEach((tour) => {
      if (tour.date === tourData.dates) {
        tourData.price = tour.price;
      }
    });
    totalPrice = tourData.price * tourData.people;

    if (tour.people != 0) {
      tour = tourData;
    } else {
      reservationPrice.textContent = '0₽';
      alert(`Выберите дату путешествия!`);
    }
    
    // reservationData.textContent = '';
    // reservationPrice.textContent = `${totalPrice}₽`;
    
    tour.price = totalPrice;
   
  });
};

export const formEmailControl = () => {
  const form = document.querySelector('.footer__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailData = Object.fromEntries(formData);

    dbEmailControl(emailData);

    return {
      emailData
    };
  });
};

