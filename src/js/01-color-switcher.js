
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStartClick() {
  intervalId = setInterval(() => {
    const colorEl = getRandomHexColor();
    document.body.style.backgroundColor = colorEl;
    buttonStart.disabled = true;

  }, 1000);
  
};

function onStopClick() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
}















