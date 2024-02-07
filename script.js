
/* -------------- function declarations -------------- */
const add = (num1, num2) => {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

const subtract = (num1, num2) => {
    return `${num1} - ${num2} = ${num1 - num2}`;
}

const multiply = (num1, num2) => {
    return `${num1} * ${num2} = ${num1 * num2}`;
}

const divide = (num1, num2) => {
    return `${num1} / ${num2} = ${num1 / num2}`;
}

const magicOperation = (num) => {
    switch (true) {
        case num < 10:
            return "Magic dust makes the number grow: " + (num * Math.floor(Math.random() * 10));
        case num <= 100:
            return "A magic gnome doubles the number: " + (num * 2);
        default:
            return "The number is too mighty for magic and remains unchanged.";
    }
}

const readNumber = (msg) => {
    let numValue, modMsg = msg;
    while (true) {
        numValue = +prompt(modMsg);
        if (numValue !== null && isNaN(numValue)) {
            modMsg = "Value is not a valid number. " + msg;
        } else {
            break;
        }
    }
    return numValue;
}

const readNonZeroNumber = (msg) => {
    let numValue, modMsg = msg;
    while (true) {
        numValue = +prompt(modMsg);
        if (numValue !== null && isNaN(numValue)) {
            modMsg = "Value is not a valid number. " + msg;
        } else if (numValue === 0) {
            modMsg = "Value cannot be zero. " + msg;
        } else {
            break;
        }
    }
    return numValue;
}

/* -------------- declaring variables -------------- */
let wantsToContinue = true;
let operation = '', num1 = 0, num2 = 0, result;

console.log("Welcome to the Magic Calculator!");

while (wantsToContinue) {
    operation = prompt("Choose an operation: \nadd \nsubtract \nmultiply \ndivide \nmagic \nexit");

    switch (operation) {
        case "add":
            num1 = readNumber("Enter number 1");
            num2 = readNumber("Enter number 2");
            alert(add(num1, num2));
            break;
        case "subtract":
            num1 = readNumber("Enter number 1");
            num2 = readNumber("Enter number 2");
            alert(subtract(num1, num2));
            break;
        case "multiply":
            num1 = readNumber("Enter multiplicand");
            num2 = readNumber("Enter multiplier");
            alert(multiply(num1, num2));
            break;
        case "divide":
            num1 = readNumber("Enter dividend");
            num2 = readNonZeroNumber("Enter divisor");
            alert(divide(num1, num2));
            break;
        case "magic":
            num1 = readNumber("Enter number");
            alert(magicOperation(num1));
            break;
        case "exit":
        case null:
            wantsToContinue = false;
            console.log("Goodbye!");
            break;
        default:
            alert(`Invalid operation: ${operation}. Please try again.`);
            break;
    }
}

