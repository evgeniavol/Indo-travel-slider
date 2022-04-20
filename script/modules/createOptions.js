
const selectDataAndPeople = (htmlEl, htmlEl2, data) => {
  data.map((item) => {
    htmlEl.insertAdjacentHTML(
      'beforeend',
      `
    <option value="${item.date}" class="tour__option reservation__option">${item.date}</option>
    `
    );
  });

  htmlEl.addEventListener('change', (e) => {
    const options = htmlEl2.querySelectorAll('option');

    data.forEach((el) => {
      if (e.target.value === el.date) {
        const keys = Object.values(el);
        for (let i = Number(keys[1]); i <= Number(keys[2]); i++) {
          htmlEl2.insertAdjacentHTML(
            'beforeend',
            `
						<option value="${i}" class="tour__option reservation__option">${i}</option>
						`
          );
        }
      }
    });

    const oldOpt = [...options];
    oldOpt.slice(1).forEach((el) => {
      el.remove();
    });
  });
};

export const renderOptions = (data) => {
  const selectDataTour = document.querySelector('#reservation__date');
  const selectPeopleCount = document.querySelector('#reservation__people');

  const selectData = document.querySelector('#tour__date');
  const selectPeople = document.querySelector('#tour__people');

  selectDataAndPeople(selectData, selectPeople, data);
  selectDataAndPeople(selectDataTour, selectPeopleCount, data);
};
