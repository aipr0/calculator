let firstOperand = 0;
let secondOperand = 0;

let chosenOperator = "";
let operatorInUse = false;

const buttons = document.querySelectorAll(".calculator button");
const display = document.querySelector(".value");

buttons.forEach((button) => button.addEventListener("click", populateDisplay));

function populateDisplay(key) {
    const OPERATORS = ["+", "-", "x", "/", "=", "C"];

    keyValue = key.target.textContent;

    if(display.textContent === "ERROR!") {
        clear();
    }

    if(OPERATORS.includes(keyValue)) {
        if(keyValue === "C") {
            clear();
        } else if(keyValue === "=") {
            if(operatorInUse) {
                secondOperand = display.textContent;

                display.textContent = operate(chosenOperator, firstOperand, secondOperand);

                operatorInUse = false;
            }
        } else if(keyValue === "-") {
            if(display.textContent === "") {
                display.textContent += keyValue;
            } else if(!operatorInUse) {
                getFirstValue(keyValue);
            } 

         } else {
            getFirstValue(keyValue);
         }
    } else {
        display.textContent += keyValue;
    }
}

function add(a, b){
    console.log(a + b);
    return roundNum(a + b);
}

function subtract(a, b){
    console.log(a - b);
    return roundNum(a - b);
}

function multiply(a, b){
    console.log(a * b);
    return roundNum(a * b);
}

function divide(a, b){
    console.log(a / b);
    if(b === 0) {
        return "ERROR!";
    } else {
        return roundNum(a / b);
    }
}

function roundNum(expr) {
    return Math.round(expr * 10000) / 10000;
}

function clear(){
    display.textContent = "";

    firstOperand = 0;
    secondOperand = 0;

    chosenOperator = "";
    operatorInUse = false;
}

function getFirstValue(key){
    chosenOperator = key;
    operatorInUse = true;

    firstOperand = display.textContent;
    display.textContent = "";
}

function operate(op, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    switch(op) {
        case "+": return add(num1, num2);

        case "-": return subtract(num1, num2);

        case "x": return multiply(num1, num2);

        case "/": return divide(num1, num2);
    }
}