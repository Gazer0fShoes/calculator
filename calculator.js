let num1, num2, operator;
const displayValue = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const basicButtons = document.querySelectorAll(".number-button, .operator-button");
const clearButton = document.querySelector("#clear-button");
const backspaceButton = document.querySelector("#backspace-button");

basicButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickNumberButton(button.innerHTML)
    })
});

clearButton.addEventListener("click", () => {
    displayValue.innerHTML = "";
});

backspaceButton.addEventListener("click", () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
});

// FUNCTIONS
function clickNumberButton(number) {
    displayValue.innerHTML += number;
}

function operate(num1, operator, num2) {
    if (operator === "+") add(num1, num2);
    if (operator === "-") subtract(num1, num2);
    if (operator === "*") multiply(num1, num2);
    if (operator ==="/") divide(num1, num2);
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