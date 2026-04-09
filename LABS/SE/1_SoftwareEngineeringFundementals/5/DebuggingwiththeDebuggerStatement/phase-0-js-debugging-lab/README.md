**Lab: Debugging with the Debugger Statement**

**Overview**
In this lab, you will use the debugger statement to solve a problem that a junior developer might encounter in an e-commerce company. The company has a web application that calculates discounts for bulk orders. Your task is to debug the provided code to ensure it works correctly using the debugger statement.

**Scenario**
You are working for an e-commerce company that offers bulk discounts to its customers. The company has a function that calculates the total price after applying a discount based on the quantity of items purchased. However, the function is not working as expected, and your job is to debug the code and fix any issues using the debugger statement.

**Problem-Solving Process**
1. Understand the code and its purpose.
2. Use the debugger statement to pause the execution.
3. Step through the code using debugging commands.
4. Inspect variable values and understand the code flow.
5. Fix any identified issues.

**Tools and Resources**
- Tools:
  - Visual Studio Code
  - Node.js
- Resources:
  - Course material on debugging
- GitHub repository https://github.com/learn-co-curriculum/phase-0-js-debugging-lab-.git

**Instructions**

1. **Fork and Clone the Repository**
   - Fork the provided GitHub repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the terminal and navigate to the project directory.
   - Run `npm install` to install the necessary dependencies.

2. **Open the Project in Visual Studio Code**
   - Open the project directory in Visual Studio Code by running `code .` in the terminal.

3. **Explore the Code**
   - Locate the `discountCalculator.js` file in the project.
   - Understand the function `calculateDiscountedPrice` which calculates the total price after applying a discount based on the quantity of items purchased.

4. **Identify the Issue**
   - The function `calculateDiscountedPrice` is not returning the correct total price. Use the debugger statement to identify and fix the issue.

5. **Debugging the Code**
   - Insert a `debugger` statement at the beginning of the `calculateDiscountedPrice` function and at strategic points within the function where you want to inspect the variables.
   - Run the code using Node.js with the inspect flag: `node inspect discountCalculator.js`.
   - Use debugging commands such as `cont`, `next`, `step`, and `repl` to step through the code and inspect variable values.
   - Identify any issues and fix them.

1. **Broken Code for Debugging:**
   ```javascript
   function calculateDiscountedPrice(quantity, pricePerItem) {
       let totalPrice = 0;

       for (let i = 1; i < quantity; i++) { 
           totalPrice += pricePerItem;
       }

       if (quantity >= 10) {
           totalPrice *= 0.9;
       }

       return totalPrice;
   }
   ```

2. **Run the Code with Node.js:**
   - Open the terminal in Visual Studio Code.
   - Run the script with debugging enabled by typing `node inspect discountCalculator.js` in the terminal.

3. **Using Debugging Commands:**
   - Type `cont` in the terminal to continue execution to the next breakpoint or end of the script.
   - Type `next` or `n` to step to the next line of code.
   - Type `step` or `s` to step into a function call.
   - Type `repl` to enter the Read-Eval-Print Loop and inspect variables.
   - Type `totalPrice` in the REPL to inspect its value at different points in the code.

4. **Fix the Code:**
   - After inspecting the code, you find that the loop initialization should start at 0 instead of 1. Correct the logic error.

**Grading Criteria**
- **Correctness:** The `calculateDiscountedPrice` function correctly calculates the total price after applying the discount.
