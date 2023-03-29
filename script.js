let firstValue = 0;
let secondValue = 0;
let operator = "";

// Dummy values for testing first and second numbers used in calculation are reset when CLR is pressed
// firstValue = 5;
// secondValue = 2;
//  console.log(firstValue)
//  console.log(secondValue)

function resetValues() {
    firstValue = 0;
    secondValue = 0;
    operator = "";
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
    if(operator === "add") {
        return addOp(a, b);
    } else if(operator === "subtract") {
        return subOp(a, b);
    } else if(operator === "multiply") {
        return multOp(a, b);
    } else if(operator === "divide") {
        return divOp(a, b);
    }
}

function calculate(e) {
    let btnInput = e.target.textContent;
    console.log(btnInput);

    document.querySelector(".display").textContent += btnInput;

    if(btnInput === "CLR") {
        document.querySelector(".display").textContent = ""
        resetValues();
        // console.log(firstValue)
        // console.log(secondValue)
    }

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