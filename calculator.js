const displayValue = document.getElementById("display");
let num1, operator, num2;
let additionSymbol = document.querySelector("#addition").innerHTML;
let subtractionSymbol = document.querySelector("#subtraction").innerHTML;
let multiplicationSymbol = document.querySelector("#multiplication").innerHTML;
let divisionSymbol = document.querySelector("#division").innerHTML;
let numbers = "1234567890.";
let operators = [additionSymbol, subtractionSymbol, multiplicationSymbol, divisionSymbol];

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        lastChar = displayValue.innerHTML.slice(-1);
        if (!numbers.includes(lastChar)) displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
    })
})

const basicButtons = document.querySelectorAll(".number-button, .operator-button, #decimal-button");
basicButtons.forEach(button => {
    button.addEventListener("click", () => {
        enterExpression(button.innerHTML)
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
    expression = displayValue.innerHTML;
    let firstChar = expression.slice(0, 1);
    let lastChar = expression.slice(-1);
    if (numbers.includes(firstChar) && numbers.includes(lastChar)) {
        displayValue.innerHTML = calculate(expression);
    }
});

// FUNCTIONS
function enterExpression(char) {
    let expression = displayValue.innerHTML;
    for (operator of operators) {
        if (operators.includes(char) && expression.includes(operator)) {
            displayValue.innerHTML = calculate(expression);
            break;
        }
    }
    if (char === ".") {
        let containsOperator = false;
        for (operator of operators) {
            if (expression.includes(operator)) {
                containsOperator = true;
                if (expression.slice(expression.indexOf(operator)).includes(".")) {
                    return;
                }
            }
        }
        if (containsOperator === false && expression.includes(".")) {
            return;
        }
        if (!expression || operators.includes(expression.slice(-1))) {
            displayValue.innerHTML += "0";
        }
    }
    displayValue.innerHTML += char;
}

function calculate(expression) {
    let operator = Array.from(expression).filter(char => !numbers.includes(char)).join("");
    let num1 = +expression.slice(0, expression.indexOf(operator));
    let num2 = +expression.slice(expression.indexOf(operator) + 1);

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

/*
when i press .
    if there is an operator
        && there is already a . after the operator
            return
    if there is no operator
        && there is a .
            return
    update display
*/