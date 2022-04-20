const days = document.querySelector('.timer__count_days');
const hours = document.querySelector('.timer__count_hours');
const minutes = document.querySelector('.timer__count_minutes');

const daysTitle = document.querySelector('.timer__units_days');
const hoursTitle = document.querySelector('.timer__units_hours');
const minutesTitle = document.querySelector('.timer__units_minutes');

const heroText = document.querySelector('.hero__text')
const timerWrapper = document.querySelector('.timer')


let timerId = null;

export const declensionNum = (num, words) => {
  return words[
    num % 100 > 4 && num % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
  ];
}

export const countdownTimer = () => {
  const timerArticle = document.querySelector('.timer');
  timerArticle.dataset.timerDeadline = '2022, 06, 01';
  let deadline = timerArticle.dataset.timerDeadline;

  deadline = new Date(deadline);

  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
		heroText.style.display = 'none'
		timerWrapper.style.display = 'none'
  }

  const daysDiff = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hoursDiff = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutesDiff = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

	
  days.textContent = daysDiff < 10 ? '0' + daysDiff : daysDiff;
  hours.textContent = hoursDiff < 10 ? '0' + hoursDiff : hoursDiff;
  minutes.textContent = minutesDiff < 10 ? '0' + minutesDiff : minutesDiff;
  daysTitle.textContent = declensionNum(daysDiff, ['день', 'дня', 'дней']);
  hoursTitle.textContent = declensionNum(hoursDiff, ['час', 'часа', 'часов']);
  minutesTitle.textContent = declensionNum(minutesDiff, [
    'минута',
    'минуты',
    'минут',
  ]);
};


timerId = setInterval(countdownTimer, 1000);
