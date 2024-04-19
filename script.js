let firstOperand = 0;
let secondOperand = 0;
let operator;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, num1, num2){
    switch(op) {
        case "+": add(num1, num2);

        case "-": subtract(num1, num2);

        case "*": multiply(num1, num2);

        case "/": divide(num1, num2);
    }
}