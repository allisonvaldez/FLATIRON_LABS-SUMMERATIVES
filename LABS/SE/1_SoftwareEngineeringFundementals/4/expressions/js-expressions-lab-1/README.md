# Average Temperature Calculation Lab

## Overview:

This lab focuses on calculating the average temperature in the city of Rome over a 30-day period. Temperature data is provided for each day, with some temperatures in Celsius and some in Fahrenheit. The goal is to calculate the average temperature using only basic expressions, operators, and variable assignments in JavaScript.

### Tests:

- When we want to run an experiment, we need to develop a hypothesis and we need to test it. In programming, we run tests to verify that programs behave the way
  we think they do. Tests help us identify bugs and judge how healthy our
  applications are. We use tests to describe the program's behavior, just as you would in a
  professional coding environment, and we also use them as teaching tools. You are
  in charge of getting the tests to pass.
- Tests have been provided to ensure the accuracy of temperature conversions and the correctness of the average temperature calculation.
- In your terminal, once inside the lab folder, run in order:
  - `npm install` to install all the packages contained in the package.json
  - `npm test` to execute the tests and check whether your variables match the expectations
  - There are a total of 8 tests checking for the accuracy of tot_temperature_in_fahrenheit, tot_temperature_in_celsius, avg_temperature_in_fahrenheit, and avg_temperature_in_celsius

### Structure

The structure of this lab — where its files and folders are located — looks
roughly like the following:

```txt
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── index.js
├── node_modules/
├── package.json
└── test
   └── indexTest.js
```

All labs will more or less have the same structure. (And non-lab lessons, for
that matter, will still have CONTRIBUTING.md, LICENSE.md, and README.md files.)

### Instructions:

1. **Define Temperature Data:**

- Data: 32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 82°F, 30°C, 65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 73°F, 21°C, 79°F, 27°C, 71°F, 19°C, 74°F, 17°C, 76°F, 29°C
- Open the index.js file.
- Create variables to represent temperature data listed above for each day, considering that some temperatures are in Celsius and some in Fahrenheit.
- Example:
  ```
     day1TempF = 32
     day2TempC = 25
     day3TempF = 70
     day4TempC = 18
     // ...
  ```

2. **Convert Temperatures:**

- Apply the conversion formulas to convert temperatures to a consistent unit (either Celsius or Fahrenheit).
- Formula to pass from F to C: (tempInFahrenheit - 32) \* 5 / 9
- Formula to pass from C to F: (tempInCelsius \* 9 / 5) + 32

3. **Calculate Total and Average Temperature:**

- Sum up all the temperatures and create two variables called exactly `tot_temperature_in_fahrenheit` and `tot_temperature_in_celsius` in which you will store the correspondent values.
- Once you have the total temperature in Fahrenheit and Celsius, calculate the average temperature in Fahrenheit and Celsius. Call the variables `avg_temperature_in_fahrenheit` and `avg_temperature_in_celsius`.
- It's quite important to follow the naming convention as the tests rely on it, take a look at the indexTest.js file inside the test folder.

4. **Test Your Code :**

- As you advance with your code, run the tests to check on your progress
- Feel free to also place `console.log()` around your code to display the value of your variables. In order for you to execute your file, follow these steps:

  1. Check what files and folders are currently in your directory typing `ls` in your terminal.
  2. Do you see the index.js file? If not, use the command `cd` followed by the name of the folder to move into a folder or the `cd ..` command to move out of a folder until you see the index.js file.
  3. Run `node index.js` to execute your js file, you should see your logs in the terminal.
  4. In general, we use `node` followed by the path to the file we want to execute. If the file is in a folder, you can use `node folderName/fileName.js` to execute it.

### Submitting Your Solution:

- When you are done, submit your solution by saving your progress with git:

1. Add your changes to the staging area by executing `git add .`
2. Create a commit by executing `git commit -m "Your commit message"`
3. Push your commits to GitHub by executing `git push origin main` or `git push origin master` depending on the name of your branch (use `git branch` to check on which branch you are).
4. Go to CodeGrade and link the repository to your assignment to submit your work.
