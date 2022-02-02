

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


// DOM numbers
let display: string = "";

const digits: HTMLElement = document.querySelector('.digits');
for (let digit: number = 1 ; digit <= 9; digit ++) {
    
    const newDigit: HTMLElement = document.createElement('button');
    newDigit.classList.add('digit');
    newDigit.textContent = digit.toString();

    newDigit.addEventListener('click', printOnScreen)

    digits.appendChild(newDigit);
}


const clearButton: HTMLElement = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);


// Digits EventListeners
function printOnScreen(e): void {
    const screen: HTMLElement = document.querySelector('.inputs');
    display = display.concat(e.target.textContent);
    console.log(display);
    screen.textContent = display;
}

function clear() {
    display = "";
    const screen: HTMLElement = document.querySelector('.inputs');
    screen.textContent = display
}


const cursor:HTMLElement = document.querySelector('.inputs');
cursor.textContent = '';
setInterval( () => {
    if(cursor.textContent === '') {
        cursor.textContent = '_';
    } else if( cursor.textContent === '_' ) {
        cursor.textContent = '';
    }
}, 600) 