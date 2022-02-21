// February 20th of 2022
// Author: FabyanXy
// Pending to add an eventlistener to the 'Dot' button 
// Pending to add its functionality to the 'Percentage' button
// Pending to add 'C' button a functionality to delete numbers one by one in the screen
// Main Function
const operate = function (operation, a, b) {
    return operation(a, b);
};
// Functions to select Mathematical operations
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
const percentage = function (a, b) {
    const result = (b / 100) * a;
    return result;
};
const a = 13;
const b = 1000;
console.log(`The ${a}% of ${b} is ${percentage(a, b)}.`);
// Cursor blinking
const cursor = document.querySelector('#cursor');
cursor.textContent = '_';
(function cursorBlink() {
    setInterval(() => {
        if (cursor.textContent == '_') {
            cursor.textContent = '';
        }
        else if (cursor.textContent == '') {
            cursor.textContent = '_';
        }
    }, 600);
})();
// Function to populate screen(#input) when clicking a digit from 0 to 9
const digits = document.querySelectorAll('.digit');
const arrayOfDigits = [...digits];
for (let i = 0; i < 9; i++) {
    arrayOfDigits[i].addEventListener('click', printOnScreen1);
}
const ceroButton = document.querySelector('#cero');
ceroButton.addEventListener('click', printOnScreen1);
// Funtions to print numbers on the screen
function printOnScreen1(e) {
    if (result) {
        valueDisplay1.textContent = valueDisplay1.textContent.concat(e.target.textContent);
    }
    else {
        valueDisplay1.textContent = valueDisplay1.textContent.concat(e.target.textContent);
    }
}
function printOnScreen2(e) {
    // Selection if we already have a prior operation and we want to make a second one
    if (valueDisplay1.textContent && valueDisplay2.textContent && resultDisplay.textContent) {
        clear();
        printOnScreen1(e);
        return;
    }
    if (!operation.textContent) {
        operation.textContent = operationSelected;
        valueDisplay2.textContent = valueDisplay2.textContent.concat(e.target.textContent);
    }
    else {
        valueDisplay2.textContent = valueDisplay2.textContent.concat(e.target.textContent);
    }
}
// Operations listeners 
// Main value on screen
let value1;
let value2;
let result;
let operationSelected = '';
const valueDisplay1 = document.querySelector('#first-input');
const valueDisplay2 = document.querySelector('#second-input');
const resultDisplay = document.querySelector('#result');
const operation = document.querySelector('#operation');
const equalsButton = document.querySelector('#equals-button');
const clearButton = document.querySelector('#clear-button');
let functionSelected;
const addButton = document.querySelector('#add');
const substractButton = document.querySelector('#substract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
/* Add operation */
addButton.addEventListener('click', () => {
    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '+';
    // Verifying if value any of two values isn't null
    if (!value1 && value1 !== 0) {
        return alert('Please input a number first');
    }
    if (resultDisplay.textContent) {
        valueDisplay1.textContent = resultDisplay.textContent;
        valueDisplay2.textContent = '';
        resultDisplay.textContent = '';
        operation.textContent = '';
    }
    if (!result) {
        operation.textContent = '+';
    }
    functionSelected = add;
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    });
});
/* Subtract operation */
substractButton.addEventListener('click', () => {
    console.log('Substract Button Pressed');
    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '-';
    // Verifying if value any of two values isn't null
    if (!value1 && value1 !== 0) {
        return alert('Please input a number first');
    }
    if (resultDisplay.textContent) {
        valueDisplay1.textContent = resultDisplay.textContent;
        valueDisplay2.textContent = '';
        resultDisplay.textContent = '';
        operation.textContent = '';
    }
    if (!result) {
        operation.textContent = '-';
    }
    functionSelected = substract;
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    });
});
/* Multiply operation */
multiplyButton.addEventListener('click', () => {
    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '*';
    // Verifying if value any of two values isn't null
    if (!value1 && value1 !== 0) {
        return alert('Please input a number first');
    }
    if (resultDisplay.textContent) {
        valueDisplay1.textContent = resultDisplay.textContent;
        valueDisplay2.textContent = '';
        resultDisplay.textContent = '';
        operation.textContent = '';
    }
    if (!result) {
        operation.textContent = '*';
    }
    functionSelected = multiply;
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    });
});
/* Divide operation */
divideButton.addEventListener('click', () => {
    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '÷';
    // Verifying if value any of two values isn't null
    if (!value1 && value1 !== 0) {
        return alert('Please input a number first');
    }
    if (resultDisplay.textContent) {
        valueDisplay1.textContent = resultDisplay.textContent;
        valueDisplay2.textContent = '';
        resultDisplay.textContent = '';
        operation.textContent = '';
    }
    if (!result) {
        operation.textContent = '÷';
    }
    functionSelected = divide;
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    });
});
// Result operation
equalsButton.addEventListener('click', () => {
    if (!valueDisplay1.textContent) {
        return alert('Please insert the first number');
    }
    if (!valueDisplay2.textContent) {
        return alert('Please insert the second number');
    }
    value1 = parseFloat(valueDisplay1.textContent);
    value2 = parseFloat(valueDisplay2.textContent);
    result = operate(functionSelected, value1, value2);
    resultDisplay.textContent = result.toString();
    console.log('Equals operation: ', value1, value2, result);
});
// Clear button
clearButton.addEventListener('click', clear);
function clear() {
    valueDisplay1.textContent = '';
    valueDisplay2.textContent = '';
    operation.textContent = '';
    resultDisplay.textContent = '';
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.addEventListener('click', printOnScreen1);
    });
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen2);
    });
    ceroButton.addEventListener('click', printOnScreen1);
    ceroButton.removeEventListener('click', printOnScreen2);
}
;
