import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStartTimer = document.querySelector("button[data-start]");
const inputDateTime = document.querySelector("#datetime-picker");
const valuesEl = document.querySelectorAll(".value");

buttonStartTimer.disabled = true;

let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    // const selectedDate = selectedDates[0];
    const currentDate = Date.now();

    if (selectedDates<= currentDate) {
      alert('Please choose a date in the future');
      buttonStartTimer.disabled = true;
    } else {
      buttonStartTimer.disabled = false;
    }
  }
};

const flatpickrInstance = flatpickr("#datetime-picker", options);

inputDateTime.addEventListener('click', () => {
  flatpickrInstance.open();
});

buttonStartTimer.addEventListener('click', onButtonStartTimer);

function onButtonStartTimer() {
  timerInterval = setInterval(updateTimerDisplay, 1000);

  function updateTimerDisplay() {
    const selectedDate = new Date(inputDateTime.value).getTime();
    const timeLeft = selectedDate - Date.now();
    if (timeLeft <= 0) {
      return
    }
    const timeLeftObject = convertMs(timeLeft);
    convertTimes(timeLeftObject)
  }
}
function convertTimes(timeLeftObject) {
  valuesEl[0].textContent = addLeadingZero(timeLeftObject.days);
  valuesEl[1].textContent = addLeadingZero(timeLeftObject.hours);
  valuesEl[2].textContent = addLeadingZero(timeLeftObject.minutes);
  valuesEl[3].textContent = addLeadingZero(timeLeftObject.seconds);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}