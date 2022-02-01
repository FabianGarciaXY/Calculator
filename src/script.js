console.log('Hello World');
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
// DOM Elements
const digits = document.querySelector('.digits');
for (let digit = 1; digit <= 9; digit++) {
    const newDigit = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();
    digits.appendChild(newDigit);
}
