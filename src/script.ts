

const operate = function(operation: (a:number, b:number) => number, a: number, b: number) {
    return operation(a, b);
}


// Principal Operations 
const add = function(a:number, b: number) {
    const result: number = a + b;
    return parseFloat(result.toFixed(1));
};

const substract = function(a: number, b:number) {
    const result: number = a - b;
    return parseFloat(result.toFixed(1));
}

const multiply = function(a: number, b: number) {
    const result: number = a * b;
    return parseFloat(result.toFixed(1));
}

const divide = function(a: number, b:number) {
    const result: number = a / b;
    return parseFloat(result.toFixed(1));
}



// Main value on screen
let displayValue1: string = '';
let displayValue2: string = ''
let value1: number;
let value2: number;
let result: number;
let functionSelected: any;



// Cursor blink
const cursor:HTMLElement = document.querySelector('#cursor');
cursor.textContent = '';
setInterval( () => {
    if(cursor.textContent === '') {
        cursor.textContent = '_';
    } else if( cursor.textContent === '_' ) {
        cursor.textContent = '';
    }
}, 600);



// Function to populate screen(#input) when clicking a digit & creating digits Elements

const digits: HTMLElement = document.querySelector('.digits');

for (let digit: number = 1 ; digit <= 9; digit ++) {
    
    const newDigit: HTMLElement = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();

    newDigit.addEventListener('click', printOnScreen1)
    digits.appendChild(newDigit);
}

function printOnScreen1(e): void {
    const firstInput: HTMLElement = document.querySelector('#first-input');
    displayValue1 = displayValue1.concat(e.target.textContent);
    firstInput.textContent = displayValue1;
}
function printOnScreen2(e): void {
    const secondInput: HTMLElement = document.querySelector('#second-input');
    displayValue2 = displayValue2.concat(e.target.textContent);
    secondInput.textContent = displayValue2;
}



// Operations listeners 
/* Add operation */
const addButton: HTMLElement = document.querySelector('#add');
const operation: HTMLElement = document.querySelector('#operation');
const resultDisplay: HTMLElement = document.querySelector('#result');


addButton.addEventListener('click', () => {

    value1 = parseInt(displayValue1);
    value2 = parseInt(displayValue2);

    if (!value1) {
        alert('Please input a number first');
        return;
    } else if(value2) {
        alert('You can only add two numbers')
        return;
    }

    functionSelected = add;
    operation.textContent = '+';

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);
    })

    console.log(addButton, value1, displayValue1);
})


// Result operation
const equalsButton: HTMLElement = document.querySelector('#equals-button');
equalsButton.addEventListener('click', () => {
    value1 = parseFloat(displayValue1);
    value2 = parseFloat(displayValue2);

    console.log(value1, value2);
    console.log(operate(add, value1, value2));
    result = operate(functionSelected, value1, value2);
    resultDisplay.textContent = result.toString();
})



// Clear button
const clearButton: HTMLElement = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);
function clear() {
    displayValue1 = '';
    displayValue2 = '';
    operation.textContent = '';

    const screen1: HTMLElement = document.querySelector('#first-input');
    const screen2: HTMLElement = document.querySelector('#second-input');


    screen1.textContent = displayValue1;
    screen2.textContent = displayValue2;
    resultDisplay.textContent = "";

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.addEventListener('click', printOnScreen1);
    });
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen2);
    });
};