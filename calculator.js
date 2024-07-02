let num1, num2, operator;
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
    let expression = displayValue.innerHTML;
    if (!(expression.slice(0, -1).includes(document.querySelector("#addition").textContent)
        || expression.slice(0, -1).includes(document.querySelector("#subtraction").textContent)
        || expression.slice(0, -1).includes(document.querySelector("#multiplication").textContent)
        || expression.slice(0, -1).includes(document.querySelector("#division").textContent)
    )) return;
    console.log("operator found");
    // ASSUME THERE WILL ONLY BE ONE OPERATOR
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