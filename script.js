function updateProgressBar() {
const input = document.getElementById('progress-input');
const progressValue = input.value;

const progressElement = document.querySelector('.progress');
progressElement.style.transform = `rotate(-90deg) translateX(-100%) scale(${progressValue / 100}, 1)`;
}
  