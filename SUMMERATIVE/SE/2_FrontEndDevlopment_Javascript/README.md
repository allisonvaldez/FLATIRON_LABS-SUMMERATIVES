# README: Week 2

## Simple Overview:
This was a simple quiz app implemented in the terminal (or CLI). There are three different tests the user can select: easy, medium, or hard. The differences between the quizes are not only based on the ease of test questions--but also the amount of time the user must answer the questions. I provide basic error handling to control if the user does not enter a proper name, does not select a proper test, and if they desire to quit. I implemented a place to provide not only feedback, but a history of the user's answers. At the end of the quiz they are given a score, and provided an option to retake the test or select a new one.

## Functions:
Here is a brief list of the functions used: along with their intent within the program:

    1. demoQuiz(): is supposed to be the outter most function to provide a modular design. It should only call 1-2 functions and utilize a try-catch for implementing the testing logic
    2. startEasyTest(): is a helper function that is nested inside of demoQuiz(). It is responsible for implementing the block of code responsible for the easy quiz. It keeps track of the test timer, the history of the answers, providing feedback, grading answers, and displaying items such as the score.
    3. startMediumTest(): is a helper function that is nested inside of demoQuiz() . It is responsible for implementing the block of code responsible for the medium quiz. It keeps track of the test timer, the history of the answers, providing feedback, grading answers, and displaying items such as the score.
    4. startMediumTest(): is a helper function that is nested inside of demoQuiz() . It is responsible for implementing the block of code responsible for the hard quiz. It keeps track of the test timer, the history of the answers, providing feedback, grading answers, and displaying items such as the score.

## Data Structure:
I am still a beginner in my journey of learning to code. I implemented in the code variables that stored an array of objects to hold the question, answers, and feedback for each test type. A simple array to determine user's score, strings to store the user's name, a boolean variable to store the status us the timer (if it is done or not), and an array to store the test history of the user

## Error Handling Tests:
I controlled for:
    1. for incorrect test selections
    2. no entry/empty selections
    3. for incorrect data types entry on input

## How to run the program: 
In your terminal, or shell, run: node quiz.js and follow the prompts.

