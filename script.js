let firstValue = 0;
let secondValue = 0;
let operator = "";
let operatorInUse = false;

function resetValues() {
    firstValue = 0;
    secondValue = 0;
    operator = "";
    operatorInUse = false;
}

function addOp(a, b) {
    return a + b;
}

function subOp(a, b) {
    return a - b;
}

function multOp(a, b) {
    return a * b;
}

function divOp(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = parseInt(a);
    b = parseInt(b);

    if(operator === "+") {
        return addOp(a, b);
    } else if(operator === "-") {
        return subOp(a, b);
    } else if(operator === "x") {
        return multOp(a, b);
    } else if(operator === "/") {
        return divOp(a, b);
    }
}

function getCurrentCalcValue() {
     return document.querySelector(".display-text").textContent;
}

function clearCalculator() {
    document.querySelector(".display-text").textContent = "";
}

function calculate(e) {
    let btnInput = e.target.textContent;

    if(!isNaN(btnInput)) {
        if(getCurrentCalcValue() === "0") {
            return;
        }
        document.querySelector(".display-text").textContent += btnInput;
    } else if(btnInput === "CLR") {
        clearCalculator();
        resetValues();
    } else if(btnInput === "=") {
        if(operatorInUse === false) {
            return;
        } else if(operator === "/" && getCurrentCalcValue() === "0") {
            alert("You cannot divide by 0!")
            clearCalculator();
            resetValues();
        } else {
            secondValue = getCurrentCalcValue();

            firstValue = operate(operator, firstValue, secondValue);
            document.querySelector(".display-text").textContent = firstValue;
            operatorInUse = false;
        }
    } else if(operatorInUse === false) {
        if(getCurrentCalcValue() === "") {
            if(btnInput === "-") {
                document.querySelector(".display-text").textContent += "-";
            }
        } else {
            operator = btnInput;
            operatorInUse = true;

            firstValue = getCurrentCalcValue();
            document.querySelector(".display-text").textContent = "";
        }
    }
}

function getButtonValue() {
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => {
        btn.addEventListener('click', calculate);
    })
}

getButtonValue()