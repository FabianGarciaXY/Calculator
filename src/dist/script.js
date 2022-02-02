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
// Digits EventListeners
let displayValue = "";
const cursor = document.querySelector('#cursor');
cursor.textContent = '';
setInterval(() => {
    if (cursor.textContent === '') {
        cursor.textContent = '_';
    }
    else if (cursor.textContent === '_') {
        cursor.textContent = '';
    }
}, 600);
// FIX IT ******
function printOnScreen(e) {
    const screen = document.querySelector('#input');
    displayValue = displayValue.concat(e.target.textContent);
    screen.textContent = displayValue;
}
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);
function clear() {
    displayValue = "";
    const screen = document.querySelector('.inputs');
    screen.textContent = displayValue;
}
// Creating digits Elements
const digits = document.querySelector('.digits');
for (let digit = 1; digit <= 9; digit++) {
    const newDigit = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();
    newDigit.addEventListener('click', printOnScreen);
    digits.appendChild(newDigit);
}
