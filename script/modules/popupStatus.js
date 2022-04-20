export const createPopupStatus201 = () => {
  const inputEmail = document.querySelector('.footer__input')
  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'is-visible');

  const div = document.createElement('div');
  div.classList.add('popup__201');


  div.insertAdjacentHTML(
    'beforeend',
    `
      <button class="close" type="button"></button>
      <h2 class="title">Ваша заявка успешно отправлена</h2>
      <p class="description">Наши менеджеры свяжутся с вами в течении 3-х рабочих дней</p>
			<div class="status__201">
				<div class="vector__img"><img src="../../img/Vector.png" alt=""></div>
			</div>
    `
  );

  overlay.append(div);

  document.body.append(overlay)

  function hideElem() {
    overlay.classList.remove('overlay', 'is-visible');
  }
  setTimeout(hideElem, 1000);
  return {
    overlay,
    div,
  };
};

export const createPopupStatusFalse = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'is-visible');


  const div = document.createElement('div');
  div.classList.add('popup__false');



  div.insertAdjacentHTML(
    'beforeend',
    `
      <button class="close" type="button"></button>
      <h2 class="title">Упс... Что-то пошло не так</h2>
      <p class="description">Не удалось отправить заявку. Пожалуйста, повторите отправку еще раз</p>
			<a href="#reservation" class="btn__false">Забронировать</a>
    `
  );


  overlay.append(div);

  document.body.append(overlay)

  const btnFalse = document.querySelector('.btn__false')
  btnFalse.addEventListener('click', () => {
    overlay.classList.remove('is-visible');
  })

  function hideElem() {
    overlay.classList.remove('overlay', 'is-visible');
  }
  setTimeout(hideElem, 1000);
  return {
    overlay,
    div,
  };
}

export const createEmailStatusFalse = () => {
  const inputEmail = document.querySelector('.footer__input')
  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'is-visible');


  const div = document.createElement('div');
  div.classList.add('popup__false');



  div.insertAdjacentHTML(
    'beforeend',
    `
      <button class="close" type="button"></button>
      <h2 class="title">Упс... Что-то пошло не так</h2>
      <p class="description">Не удалось отправить заявку. Пожалуйста, повторите отправку еще раз</p>
			<a href="#email__form" class="btn__false">Повторить</a>
    `
  );


  overlay.append(div);

  document.body.append(overlay)

  const btnFalse = document.querySelector('.btn__false')
  btnFalse.addEventListener('click', () => {
    overlay.classList.remove('is-visible');
  })

  function hideElem() {
    overlay.classList.remove('overlay', 'is-visible');
  }
  setTimeout(hideElem, 1000);
  return {
    overlay,
    div,
  };
}