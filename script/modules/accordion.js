const items = document.querySelectorAll('.travel__item');
const textWrappers = document.querySelectorAll('.travel__item-text-wrapper');
const itemBtns = document.querySelectorAll('.travel__item-title');

let heightWrapper = 0;

textWrappers.forEach((elem) => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

itemBtns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (btnIndex === i) {
        textWrappers[i].style.height = items[i].classList.contains('travel__item_active') ?
          '' : `${heightWrapper}px`;
        items[i].classList.toggle('travel__item_active');
      } else {
        items[i].classList.remove('travel__item_active');
        textWrappers[i].style.height = '';
      }
    }
  });
});