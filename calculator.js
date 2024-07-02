let additionSymbol = document.querySelector("#addition").innerHTML;
let subtractionSymbol = document.querySelector("#subtraction").innerHTML;
let multiplicationSymbol = document.querySelector("#multiplication").innerHTML;
let divisionSymbol = document.querySelector("#division").innerHTML;
const displayValue = document.getElementById("display");

const basicButtons = document.querySelectorAll(".number-button, .operator-button");
basicButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickNumberButton(button.innerHTML)
    })
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    displayValue.innerHTML = "";
});

const backspaceButton = document.querySelector("#backspace-button");
backspaceButton.addEventListener("click", () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
});

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", () => {
    let acceptedChars = "1234567890."
    let expression = displayValue.innerHTML;
    let firstChar = expression.slice(0, 1);
    let lastChar = expression.slice(-1);
    if (acceptedChars.includes(firstChar) && acceptedChars.includes(lastChar)) {
        let operator = Array.from(expression).filter(char => !acceptedChars.includes(char)).join("");
        console.log(operator);
        let num1 = +expression.slice(0, expression.indexOf(operator));
        let num2 = +expression.slice(expression.indexOf(operator) + 1);
        displayValue.innerHTML = calculate(num1, num2, operator);
    }
});

// FUNCTIONS
function clickNumberButton(number) {
    displayValue.innerHTML += number;
}

function calculate(num1, num2, operator) {
    if (operator === additionSymbol) return add(num1, num2);
    if (operator === subtractionSymbol) return subtract(num1, num2);
    if (operator === multiplicationSymbol) return multiply(num1, num2);
    if (operator === divisionSymbol) return divide(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}