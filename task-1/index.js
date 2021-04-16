console.log('message');

const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
console.log(btnStart);

btnStart.addEventListener('click', onBtnStartClick);
btnStart.addEventListener('click', onBtnStopClick);

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


function onBtnStartClick (evt) {

    timeId =  setTimeout(() => {
        bodyColor.style.background = colors[index];
        index = randomIntegerFromInterval(0, colors.length-1);
    },CHANGE_COLOR_DELAY);

    if (evt) {
        btnStart.setAttribute('disabled', true)
    } else {
        btnStart.setAttribute('disabled', false)
    }

}

function onBtnStopClick () {
   clearTimeout(timeId);
}