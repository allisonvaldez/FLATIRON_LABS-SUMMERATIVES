### Lab: Automated Garden Management System

**Estimated Completion Time: 30-60 min.**

**Objective:**
In this lab, you will apply your knowledge of JavaScript statements to create a program that simulates an automated garden management system. You will use selection and repetition statements to control various aspects of the garden, such as watering plants, controlling garden lights, and adjusting the soil moisture level.

### Overview

**Scenario:**
You are a junior developer working for a smart home technology company. Your task is to implement features that manage and control various garden devices based on sensor data and user inputs. This involves checking conditions and iterating through device settings to maintain the garden automatically.

### Tools and Resources

- Visual Studio Code
- Node.js 

### Instructions

1. **Fork and Clone the Repository:**
   - Fork the provided GitHub repository: https://github.com/learn-co-curriculum/phase-0-js-statements-lab.git
   - Clone the forked repository to your local machine.

2. **Install Dependencies:**
   - Run `npm install` to install the necessary dependencies.

3. **Initial Setup:**
   - Open the `gardenManagement.js` file in your code editor.
   - The following variables are provided in `gardenManagement.js`:
     - `const temperature = 90;`
     - `const timeOfDay = "morning";`
     - `let soilMoisture = 30;`

4. **Run Tests:**
   - Run `npm test` to execute the tests and see that all tests are currently failing.
   - As you write your code, run `npm test` to check if you are passing the tests.

5. **Write the Following Statements and Loops:**

   **Watering Control:**
   - Use an `if-else` statement to check the `temperature`.
   - If the `temperature` is greater than 80, console log `"Watering on"`.
   - Otherwise, console log `"Watering off"`.

   **Garden Lights Control:**
   - Use an `if-else` statement to check `timeOfDay`.
   - If `timeOfDay` is `"evening"` or `"night"`, console log `"Lights on"`.
   - Otherwise, console log `"Lights off"`.

   **Soil Moisture Adjustment:**
   - Use a `while` loop to increment the value of `soilMoisture` by 5 until it reaches 40.
   - Console log the value of `soilMoisture` at each step, and when it reaches 40, console log `40`.
