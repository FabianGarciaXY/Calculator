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
// Cursor blinking
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
const digits = document.querySelectorAll('.digit');
const arrayOfDigits = [...digits];
for (let i = 0; i < 9; i++) {
    arrayOfDigits[i].addEventListener('click', printOnScreen1);
}
// Funtions to print numbers on the screen
function printOnScreen1(e) {
    valueDisplay1.textContent = valueDisplay1.textContent.concat(e.target.textContent);
}
function printOnScreen2(e) {
    if (!operation.textContent) {
        operation.textContent = '+';
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
const valueDisplay1 = document.querySelector('#first-input');
const valueDisplay2 = document.querySelector('#second-input');
const resultDisplay = document.querySelector('#result');
const addButton = document.querySelector('#add');
const operation = document.querySelector('#operation');
const equalsButton = document.querySelector('#equals-button');
const clearButton = document.querySelector('#clear-button');
let functionSelected;
/* Add operation */
addButton.addEventListener('click', () => {
    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay1.textContent);
    result = parseInt(resultDisplay.textContent);
    if (!value1) {
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
    });
});
// Result operation
equalsButton.addEventListener('click', () => {
    value1 = parseFloat(valueDisplay1.textContent);
    value2 = parseFloat(valueDisplay2.textContent);
    result = operate(functionSelected, value1, value2);
    resultDisplay.textContent = result.toString();
    console.log('Equals operation: ', value1, value2, result);
});
// Clear button
clearButton.addEventListener('click', function clear() {
    valueDisplay1.textContent = '';
    valueDisplay2.textContent = '';
    operation.textContent = '';
    resultDisplay.textContent = "";
    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach(digit => {
        digit.addEventListener('click', printOnScreen1);
    });
    gettinDigits.forEach(digit => {
        digit.removeEventListener('click', printOnScreen2);
    });
});
/*
const substractButton: HTMLElement = document.querySelector('#substract');

substractButton.addEventListener('click', () => {
    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);

    if (!value1) { return alert('Please input a number first');}
    else if(value2) { return alert('You can only substract two numbers');}

    functionSelected = substract;
    operation.textContent = '-';

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    })
})


const multiplyButton: HTMLElement = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);

    if (!value1) { return alert('Please input a number first');}
    else if(value2) { return alert('You can only substract two numbers');}

    functionSelected = multiply;
    operation.textContent = '*';

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });

})

const divideButton: HTMLElement = document.querySelector('#divide');
divideButton.addEventListener( 'click', () => {

    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);

    functionSelected = divide;
    operation.textContent = '/';

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    });
})
*/ 
