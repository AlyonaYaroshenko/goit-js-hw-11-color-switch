const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};
let timerId = undefined    


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
refs.startBtn.addEventListener('click', setRandomColor);
refs.stopBtn.addEventListener('click', stopInterval);

function setRandomColor() {
  console.log(document.body.style.backgroundColor);
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    refs.startBtn.setAttribute("disabled", true);
    refs.stopBtn.removeAttribute("disabled");
    timerId = setTimeout(setRandomColor, 1000);
};

function stopInterval() {
  clearTimeout(timerId);
  refs.startBtn.removeAttribute('disabled');
}