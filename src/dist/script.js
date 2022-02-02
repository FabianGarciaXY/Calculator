const operate = function (operation, a, b) {
    return operation(a, b);
};
// Principal Operations 
const add = function (a, b) {
    const result = a + b;
    return parseFloat(result.toFixed(1));
};
const substract = function (a, b) {
    const result = a - b;
    return parseFloat(result.toFixed(1));
};
const multiply = function (a, b) {
    const result = a * b;
    return parseFloat(result.toFixed(1));
};
const divide = function (a, b) {
    const result = a / b;
    return parseFloat(result.toFixed(1));
};
// DOM numbers
let display = "";
const digits = document.querySelector('.digits');
for (let digit = 1; digit <= 9; digit++) {
    const newDigit = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();
    newDigit.addEventListener('click', printOnScreen);
    digits.appendChild(newDigit);
}
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);
// Digits EventListeners
function printOnScreen(e) {
    const screen = document.querySelector('.inputs');
    display = display.concat(e.target.textContent);
    console.log(display);
    screen.textContent = display;
}
function clear() {
    display = "";
    const screen = document.querySelector('.inputs');
    screen.textContent = display;
}
const cursor = document.querySelector('.inputs');
cursor.textContent = '';
setInterval(() => {
    if (cursor.textContent === '') {
        cursor.textContent = '_';
    }
    else if (cursor.textContent === '_') {
        cursor.textContent = '';
    }
}, 600);
