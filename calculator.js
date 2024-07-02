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
    let additionSymbol = document.querySelector("#addition").innerHTML;
    let subtractionSymbol = document.querySelector("#subtraction").innerHTML;
    let multiplicationSymbol = document.querySelector("#multiplication").innerHTML;
    let divisionSymbol = document.querySelector("#division").innerHTML;

    // ASSUME THERE WILL ONLY BE ONE OPERATOR
    if (expression.slice(-1) >= "0" && expression.slice(-1) <= "9"
        && expression.slice(0, 1) >= "0" && expression.slice(0, 1) <= "9"
    ){
        if (expression.slice(0, -1).includes(additionSymbol)
        ){
            num1 = +expression.slice(0, expression.indexOf(additionSymbol));
            num2 = +expression.slice(expression.indexOf(additionSymbol) + 1);
            displayValue.innerHTML = add(num1, num2);
        };    
        if (expression.slice(0, -1).includes(subtractionSymbol)
        ){
            num1 = +expression.slice(0, expression.indexOf(subtractionSymbol));
            num2 = +expression.slice(expression.indexOf(subtractionSymbol) + 1);
            displayValue.innerHTML = subtract(num1, num2);
        };    
        if (expression.slice(0, -1).includes(multiplicationSymbol)
        ){
            num1 = +expression.slice(0, expression.indexOf(multiplicationSymbol));
            num2 = +expression.slice(expression.indexOf(multiplicationSymbol) + 1);
            displayValue.innerHTML = multiply(num1, num2);
        };    
        if (expression.slice(0, -1).includes(divisionSymbol)
        ){
            num1 = +expression.slice(0, expression.indexOf(divisionSymbol));
            num2 = +expression.slice(expression.indexOf(divisionSymbol) + 1);
            console.log(num1, num2);
            displayValue.innerHTML = divide(num1, num2);
        };
    }
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