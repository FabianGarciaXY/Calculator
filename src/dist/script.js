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
// Main value on screen
let displayValue1 = '';
let displayValue2 = '';
let value1;
let value2;
let result;
let functionSelected;
// Cursor blink
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
// Function to populate screen(#input) when clicking a digit & creating digits Elements
const digits = document.querySelector('.digits');
for (let digit = 1; digit <= 9; digit++) {
    const newDigit = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();
    newDigit.addEventListener('click', printOnScreen1);
    digits.appendChild(newDigit);
}
function printOnScreen1(e) {
    const firstInput = document.querySelector('#first-input');
    displayValue1 = displayValue1.concat(e.target.textContent);
    firstInput.textContent = displayValue1;
}
function printOnScreen2(e) {
    const secondInput = document.querySelector('#second-input');
    displayValue2 = displayValue2.concat(e.target.textContent);
    secondInput.textContent = displayValue2;
}
// Operations listeners 
/* Add operation */
const addButton = document.querySelector('#add');
const operation = document.querySelector('#operation');
const resultDisplay = document.querySelector('#result');
addButton.addEventListener('click', () => {
    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);
    if (!value1) {
        return alert('Please input a number first');
    }
    functionSelected = add;
    operation.textContent = '+';
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });
});
/* Substract Operation */
const substractButton = document.querySelector('#substract');
substractButton.addEventListener('click', () => {
    value1 = value1;
    value2 = value2;
    if (!value1) {
        return alert('Please input a number first');
    }
    else if (value2) {
        return alert('You can only substract two numbers');
    }
    functionSelected = substract;
    operation.textContent = '-';
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });
});
/* Multiply Operation*/
const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);
    if (!value1) {
        return alert('Please input a number first');
    }
    else if (value2) {
        return alert('You can only substract two numbers');
    }
    functionSelected = multiply;
    operation.textContent = '*';
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });
});
/* Divide Operation*/
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);
    functionSelected = divide;
    operation.textContent = '/';
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });
});
// Result operation
const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener('click', () => {
    value1 = parseFloat(displayValue1);
    value2 = parseFloat(displayValue2);
    result = operate(functionSelected, value1, value2);
    resultDisplay.textContent = result.toString();
    console.log('Equals operation: ', value1, value2, result);
});
// Clear button
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);
function clear() {
    displayValue1 = '';
    displayValue2 = '';
    operation.textContent = '';
    const screen1 = document.querySelector('#first-input');
    const screen2 = document.querySelector('#second-input');
    screen1.textContent = displayValue1;
    screen2.textContent = displayValue2;
    resultDisplay.textContent = "";
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.addEventListener('click', printOnScreen1);
    });
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen2);
    });
}
;
