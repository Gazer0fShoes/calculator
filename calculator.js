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
    // ASSUME THERE WILL ONLY BE ONE OPERATOR
    if (expression.slice(0, -1).includes(document.querySelector("#addition").innerHTML) 
        && expression.slice(-1) >= "0" && expression.slice(-1) <= "9"
        && expression.slice(0, 1) >= "0" && expression.slice(0, 1) <= "9") {
        console.log("operator found. Function not yet implemented.");
        };    
    if (expression.slice(0, -1).includes(document.querySelector("#subtraction").innerHTML)
        && expression.slice(-1) >= "0" && expression.slice(-1) <= "9"
        && expression.slice(0, 1) >= "0" && expression.slice(0, 1) <= "9") {
        console.log("operator found. Function not yet implemented.");
        };    
    if (expression.slice(0, -1).includes(document.querySelector("#multiplication").innerHTML)
        && expression.slice(-1) >= "0" && expression.slice(-1) <= "9"
        && expression.slice(0, 1) >= "0" && expression.slice(0, 1) <= "9") {
        console.log("operator found. Function not yet implemented.");
        };    
    if (expression.slice(0, -1).includes(document.querySelector("#division").innerHTML)
        && expression.slice(-1) >= "0" && expression.slice(-1) <= "9"
        && expression.slice(0, 1) >= "0" && expression.slice(0, 1) <= "9") {
        console.log("operator found. Function not yet implemented.")
        };
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