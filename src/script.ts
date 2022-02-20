// Main Function
const operate = function(operation: (a:number, b:number) => number, a: number, b: number) {
    return operation(a, b);
}

// Functions to select Mathematical operations
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

const percentage = function(a: number, b:number) {
    const result: number = (b / 100) * a;
    return result;
    }
const a:number = 13; const b: number = 1000
console.log(`The ${a}% of ${b} is ${percentage(a, b)}.`);


// Cursor blinking
const cursor:HTMLElement = document.querySelector('#cursor');
function cursorBlink () {
    cursor.textContent = '';
    setInterval( () => {
        if(cursor.textContent === '') {
            cursor.textContent = '_';
        } else if( cursor.textContent === '_' ) {
            cursor.textContent = '';
        }
    }, 600);
}
cursorBlink()

// On-Off Button
let calculatorState: boolean = true;
document.querySelector('#on-off').addEventListener('click', on);
function on() {
    if (calculatorState) {
        calculatorState = false;

    } else if (!calculatorState) {
        calculatorState = true;
    }
    console.log(calculatorState)
}

// Function to populate screen(#input) when clicking a digit from 0 to 9
const digits: NodeList = document.querySelectorAll('.digit');
const arrayOfDigits = [...digits]
for(let i: number = 0; i < 9; i++ ) {
    arrayOfDigits[i].addEventListener('click', printOnScreen1)
}
const ceroButton = document.querySelector('#cero');
ceroButton.addEventListener('click', printOnScreen1)


// Funtions to print numbers on the screen
function printOnScreen1(e): void {
    if(result) {
        valueDisplay1.textContent = valueDisplay1.textContent.concat(e.target.textContent);
        valueDisplay2.textContent = '';
        resultDisplay.textContent = '';
    } else {
        valueDisplay1.textContent = valueDisplay1.textContent.concat(e.target.textContent);
    }
}
function printOnScreen2(e): void {
    if(valueDisplay1.textContent && valueDisplay2.textContent && resultDisplay.textContent) {
        valueDisplay1.textContent = '';
        operation.textContent = '';
        printOnScreen1(e)
        return
    }

    if (!operation.textContent) {
        operation.textContent = operationSelected;
        valueDisplay2.textContent = valueDisplay2.textContent.concat(e.target.textContent);
    } else {
    valueDisplay2.textContent = valueDisplay2.textContent.concat(e.target.textContent);
    }
}


// Operations listeners 
// Main value on screen
let value1: number;
let value2: number;
let result: number;
let operationSelected: string = '';

const valueDisplay1: HTMLElement = document.querySelector('#first-input');
const valueDisplay2: HTMLElement = document.querySelector('#second-input');
const resultDisplay: HTMLElement = document.querySelector('#result');

const operation: HTMLElement = document.querySelector('#operation');
const equalsButton: HTMLElement = document.querySelector('#equals-button');
const clearButton: HTMLElement = document.querySelector('#clear-button');
let functionSelected: any;

const addButton: HTMLElement = document.querySelector('#add');
const substractButton: HTMLElement = document.querySelector('#substract');

/* Add operation */
addButton.addEventListener('click', () => {

    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '+';

    if (!value1 && value1 !== 0) { return alert('Please input a number first');}
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
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);

        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    })
})
/* Subtract operation */
substractButton.addEventListener('click', () => {
    console.log('Substract Button Pressed');

    value1 = parseInt(valueDisplay1.textContent);
    value2 = parseInt(valueDisplay2.textContent);
    result = parseInt(resultDisplay.textContent);
    operationSelected = '-';

    if (!value1 && value1 !== 0) { return alert('Please input a number first');}
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
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen1);
        digit.addEventListener('click', printOnScreen2);

        ceroButton.removeEventListener('click', printOnScreen1);
        ceroButton.addEventListener('click', printOnScreen2);
    })
})


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
})

// Clear button
clearButton.addEventListener('click', function clear() {
    valueDisplay1.textContent = '';
    valueDisplay2.textContent = '';
    operation.textContent = '';
    resultDisplay.textContent = '';

    const gettinDigits = document.querySelectorAll('.digit');
    gettinDigits.forEach( digit => {
        digit.addEventListener('click', printOnScreen1);
    });
    gettinDigits.forEach( digit => {
        digit.removeEventListener('click', printOnScreen2);
    });

    ceroButton.addEventListener('click', printOnScreen1)
    ceroButton.removeEventListener('click', printOnScreen2);
});