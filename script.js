let a = prompt("Please enter the first number: ");
let b = prompt("Please enter the second number: ");
let op = prompt("Please enter the operator (+ - * /)");

let num1 = parseInt(a);
let num2 = parseInt(b);
let operator = op;

console.log("num1", num1);
console.log("num2", num2);


add = (num1, num2) => {
    let addValue = (num1 + num2);
    console.log("add", addValue);
}

subtract = (num1, num2) => {
    let subtractValue = (num1 - num2);
    console.log("subtract", subtractValue);
}

multiply = (num1, num2) => {
    let multiplyValue = (num1 * num2);
    console.log("multiply", multiplyValue);
}

divide = (num1, num2) => {
    let divideValue = (num1 / num2);

    if (divideValue == "Infinity") {
        return alert("Cannot divide by zero!");
    } else
        return console.log("divide", divideValue);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("No operator found!");
    }

}

operate(operator, num1, num2);



