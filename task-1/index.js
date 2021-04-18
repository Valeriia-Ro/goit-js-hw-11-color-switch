

const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
console.log(btnStart);

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

const CHANGE_COLOR_DELAY = 1000;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let timeId = 0;

function onBtnStartClick () {
    
    timeId = setInterval(() => {
        const index = randomIntegerFromInterval(0, colors.length-1);
        bodyColor.style.background = colors[index];
    },CHANGE_COLOR_DELAY);

    btnStart.setAttribute('disabled', true)
}

function onBtnStopClick () {
   clearTimeout(timeId);
   btnStart.removeAttribute('disabled');

}