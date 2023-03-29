let firstValue = 0;
let secondValue = 0;
let operator = "";


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

function namedCallBack(e) {
    console.log(e.target.textContent);
}

function getButtonValue() {
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => {
        btn.addEventListener('click', namedCallBack);
    })
}


function calculate() {

}

getButtonValue()

//Testing calculator operations
console.log(operate("add", 2, 2)); //Should be 4
console.log(operate("subtract", 10, 1)); //Should be 9
console.log(operate("multiply", 5, 5)); //Should be 25
console.log(operate("divide", 90, 9)); //Should be 10