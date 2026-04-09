// Declaration required to run program properly for reading in the input from the user to perform calculations
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store the calulation history as an array
let calcHistory = [];

// Provide the functions for the calculator make sure perform error handling where necessary
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
    if (b === 0) {
        return "Cannot divide by zero!";
    } else {
        return a / b;
    }
}

function makeCalculations() {
    readline.question("Would you like to run the calculation program?: 0 for Yes, and 1 for No: ", (answer) => {

        // Conditional logic for a yes entry
        if (answer === "0") {
            readline.question('Enter the first number: ', (num1) => {
                readline.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
                    readline.question('Enter the second number: ', (num2) => {

                        /* Perform type conversion as it is necessary to get the right data type for calculator to work
                        Make sure to also perform error handling to control for improper inputs
                        */
                        let val1 = Number(num1);
                        let val2 = Number(num2);
                        let result;

                        // Perform error handling if improper entry provided exit program
                        if (isNaN(val1) || isNaN(val2)) {
                            result = "Quitting...please try entering a real number."
                            process.exit();
                        } else {
                            // Utilize if statements for conditional logic flow
                            if (operation === "add") {
                                result = add(val1, val2);
                            } else if (operation === "subtract") {
                                result = subtract(val1, val2);
                            } else if (operation === "multiply") {
                                result = multiply(val1, val2);
                            } else if (operation === "divide") {
                                result = divide(val1, val2);
                            } else {
                                result = "Please try another operation, this does not work!";
                                process.exit();
                            }
                        }

                        // Update the calculation history with proper entries
                        calcHistory.push(`${num1} ${operation} ${num2} = ${result}`);

                        // Display the result and history of calculations
                        console.log("Calculation: " + result);
                        console.log("Calculation History: ", calcHistory);

                        // Call the function again for the while loop to work to check if the user wants to do more calculations
                        makeCalculations();
                    });
                });
            });
        } else {
            console.log("Quiting program per entry...");
            readline.close();
            process.exit();
        }
    });
}

// Call the function here to run the calculator initially
makeCalculations();
