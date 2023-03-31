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

function calculate(e) {
    let btnInput = e.target.textContent;

    if(!isNaN(btnInput)) {
        document.querySelector(".display-text").textContent += btnInput;
    } else if(btnInput === "CLR") {
        document.querySelector(".display-text").textContent = "";
        resetValues();
    } else if(btnInput === "=") {
        if(operatorInUse === false) {
            return;
        } else {
            secondValue = getCurrentCalcValue();

            firstValue = operate(operator, firstValue, secondValue);
            document.querySelector(".display-text").textContent = firstValue;
            operatorInUse = false;
        }
    } else {
        if(operatorInUse === false) {
            operator = btnInput;
            operatorInUse = true;

            firstValue = getCurrentCalcValue();
            document.querySelector(".display-text").textContent = "";
        }
    }

    // document.querySelector(".display").textContent += btnInput;

    // if(btnInput === "CLR") {
    //     document.querySelector(".display").textContent = ""
    //     resetValues();
    //     // console.log(firstValue)
    //     // console.log(secondValue)
    // }

}

function getButtonValue() {
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => {
        btn.addEventListener('click', calculate);
    })
}

getButtonValue()

// Testing calculator operations
// console.log(operate("add", 2, 2)); //Should be 4
// console.log(operate("subtract", 10, 1)); //Should be 9
// console.log(operate("multiply", 5, 5)); //Should be 25
// console.log(operate("divide", 90, 9)); //Should be 10