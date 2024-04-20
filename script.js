let firstOperand = 0;
let secondOperand = 0;

let chosenOperator = "";
let operatorInUse = false;
let negationInUse = false;

const buttons = document.querySelectorAll(".calculator button");
const display = document.querySelector(".value");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        populateDisplay(e.target.textContent);
    });
});

function populateDisplay(key) {
    const OPERATORS = ["+", "-", "x", "/", "=", "C"];

    if(display.textContent === "ERROR!") {
        clear();
    }

    if(OPERATORS.includes(key)) {
        if(key === "C") {
            clear();
        } else if(key === "=") {
            if(operatorInUse === true) {
                secondOperand = display.textContent;

                display.textContent = operate(chosenOperator, firstOperand, secondOperand);

                operatorInUse = false;
            }
        } else if(key === "-") {
            if(display.textContent === "") {
                display.textContent += key;
            } else if(operatorInUse === false) {
                getFirstValue(key);
            } 

         } else {
            getFirstValue(key);
         }
    } else {
        display.textContent += key;
    }
}



function add(a, b){
    console.log(a + b);
    return a + b;
}

function subtract(a, b){
    console.log(a - b);
    return a - b;
}

function multiply(a, b){
    console.log(a * b);
    return a * b;
}

function divide(a, b){
    console.log(a / b);
    if(b === 0) {
        return "ERROR!";
    } else {
        return a / b;
    }
}

function clear(){
    display.textContent = "";

    firstOperand = 0;
    secondOperand = 0;

    chosenOperator = "";
    operatorInUse = false;
    negationInUse = false;
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