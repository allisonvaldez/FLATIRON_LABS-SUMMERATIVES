# README: Week 3

## Simple Overview:
This lab combines techniques necessary to create a Single Page Application's (SPA) using HTML, CSS, and JavaScript. I will build an interactive, data-driven web application that align with industry standards. The project culminates in an interactive web page that communicates with a public API to provide meaningful user interactions. It is a functional, modern web application, and with critical web development skills.

## Functions:
Here is a brief list of the functions used, along with their intent within the program:

    1.  Create a simple form
    2. write functions to fetch data
    3. write functions to parse and display data
    4.  Alow users to input a word into an HTML form 
    5. handle user events
    6.  Display Definitions: Dynamically show the word’s definition, part of speech, and example usage on the same page without a reload, sounds
    7. Controlling Style the Page: Use JavaScript to dynamically update the CSS, highlighting saved words or changing themes for better readability.


## Data Structure:
I am still a beginner in my journey of learning to code. I implemented in the code variables that stored an array of objects to hold the question, answers, and feedback for each test type. A simple array to determine user's score, strings to store the user's name, a boolean variable to store the status us the timer (if it is done or not), and an array to store the test history of the user

In this step, it is important to break down the different coding languages you will be using and prepare how to design this page.

## Error Handling Tests:
I controlled for:
    1. If a word is not able to be found.
    2. If the API request fails.
** install jest to test valid and invalid word seraches, check api response handling, and console.lgo to debug

## How to run the program: 
In your terminal, or shell, run: node quiz.js and follow the prompts.
npm start

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Future Improvements:
1. antonmyns
2. better sounds?