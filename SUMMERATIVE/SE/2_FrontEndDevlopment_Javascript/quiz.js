/*
1. Start outter most function to control if the test is starts or not by a while loop and timer
2. Declare a readline to gather initial input from the user
*/
const readline = require('node:readline/promises');
const {
    stdin: input,
    stdout: output
} = require("node:process");
const { read } = require('node:fs');

// Initialize the interface for readline/promise module usage
const rl = readline.createInterface({ input, output });

// Declare global variables needed for functions to run
let userName = "";
let testScore = 0;
let timerDone = false;
let countdownDisplay;

// outter function: make it modular so 1 function should be called
async function demoQuiz() {
    // Use try catch logic instead of if else to control the logic of the quiz app
    try {
         // Start with gathering the user's name
        const nameEntry = await rl.question("\nEnter your name: ");

        // Perform error handling for non entry
        if (!nameEntry.trim()){
            console.log("\nQuiting program, please provide a valid entry for a name");
            return;
        } 
        
        // Perform error handling for non string entry
        if (!isNaN(Number(nameEntry.trim()))){
            console.log("\nQuiting program, please provide a valid entry for a name");
            return;
        }

        // Otherwise continue to save the name entry
        userName = nameEntry;
        console.log(`\nWelcome, ${userName}!`);

        /*
        1. Block of code to start quiz based on user entry
        2. Make sure to declare scoped variables for inner functions to run
        3. Implement control logic
        */ 
        let keepRunning = true;
        while(keepRunning) {
            const answer1 = await rl.question(`\n${userName}, do you want to take a quiz?:\n\n0 for YES, \n1 to QUIT: `);

            // Control logic for what type of test to execute
            if (answer1 === "0") {
                /* 
                1. Implement in steps all the inner functions based on conditional logic for type of test selected
                2. keep it simple and modular only have 1-2 outter functions to call modular helper inner functions
                */
                const typeOfTest = await rl.question(`\n${userName} what type of test do you want?:\n\n0 for EASY, \n1 for MEDIUM, \n2 for HARD, \n3 to QUIT: `);

                if (typeOfTest === "0") {
                    /*
                    1. call easy test
                    2. call other necessary helper fuctions if needed
                    3. call timer as a callback for the while loop
                    */
                    await startEasyTest();

                } else if (typeOfTest === "1") {
                    /*
                    1. call medium test
                    2. call other necessary helper fuctions if needed
                    3. dont forget timer as a callback for the while loop
                    */
                    await startMediumTest();

                } else if (typeOfTest === "2") {
                    /*
                    1. call hard test
                    2. call other necessary helper fuctions if needed
                    3. dont forget timer as a callback for the while loop
                    */
                    await startHardTest();

                } else if (typeOfTest === "3") {
                    // quit or call other needed helper fuctions as needed
                    keepRunning = false;
                    process.exit();

                } else {
                     // error handling to quit or call other needed helper fuctions as needed for other edge cases
                    console.log(`\nInvalid entry ${userName}... QUITING!`);
                    process.exit();
                }
            } else if (answer1 === "1") {
                // quit if selected
                console.log("BYE!");
                keepRunning = false;
                process.exit();

            } else {
                // quit if triggered
                console.log(`\n${userName}, please provide a valid entry... select either: 0 or 1`);
                process.exit();
            }
        }
    } catch(err) {
        // try catch error handling
        console.log(`\n${userName}, quitting an error has occured!`, err);
        process.exit();

    } finally {
        // error handling completing the block of code for other edge cases
        rl.close();
        process.exit();
    }
}

// Needed to run the quiz app
demoQuiz();
 
/*
1. Declare all inner "helper functions" for global usage to be called in above as nested functions to implement modularity and organization/
2. Each helper functions should do one thing only.
*/

/*
(1.) Plan EASY test bank and answers:
1. Create an array of objects to implement EASY test
*/
const easyTest = [
    {
        question: "What is 0 + 1 = ?",
        ans: 1,
        feedback: "0 + 1 = 1"
    },
    {
        question: "What is 1 + 1 = ?",
        ans: 2,
        feedback: "1 + 1 = 2"
    },
    {
        question: "What is 2 + 1 = ?",
        ans: 3,
        feedback: "2 + 1 = 3"
    }
];

/* 
(2.) Planning easyTest block's implementation:
1. use asynchronous function to start EASY test
2. create a for loop to iterate over array of objects to check user answer against the right answer bank
3. call timer function for 1min (convert to sec timer)
4. quiz should stop if user runs out of time
*/
async function startEasyTest () {
    /*
    1. call any inner helper functions for EASY test
    2. use a for loop to iterate over quiz questions and gather user response
    3. perform error handling for user entries and control for type conversion
    4. provide correct answer and/or feedback 
    5. call timer for 1 min (convert to secs)
    */
    console.log(`\nOK, ${userName} let's do an EASY quiz. You have 20 seconds to complete the quiz!\n\n`);
    
    // start 20 sec timer with a helper function
    const timerId = easyMediumStartTimer();
    // set the formal start time of the user declaring the current system's time
    const startTime = Date.now();

    let testScore = 0;

    // track test history
    let testHistory = [];

    // for loop for iteration
    for (let quest = 0; quest < easyTest.length; quest++) {
        // check timer and stop quiz if time limit has lasped
        if (timerDone) break;

        const easyQuestion = easyTest[quest];

        // Save the user's input for each question
        const userEasyAns = await rl.question(`${easyQuestion.question}: `);

        // check the time left on the clock
        if (timerDone || (Date.now() - startTime) > 20000){
            timerDone = true;
            console.log(`\nSORRY ${userName}-- you were too slow!`);
            break;
        }

        // Perform type conversion since input is a string and utilize the .trim() method to cut unnecessary data from input
        const userConvertedEasyAns = Number(userEasyAns.trim());
        // Set the conditions for correct entries
        const isCorrect = userConvertedEasyAns === easyQuestion.ans;

        // Set the conditions to save test history
        testHistory.push({
            que: easyQuestion.question,
            userA: userConvertedEasyAns,
            status: isCorrect ? "CORRECT" : "WRONG" 
        });

        /*
        1. Control logic to check if user answer against the correct answer in EASY array object to trigger proper feedback
        2. increase the testScore if user entry is correct
        */
        if (isCorrect ) {
            console.log(`\nCorrect, ${userName}! We know that: ` + easyQuestion.feedback);
            testScore++;
        } else {
            console.log(`\nSorry ${userName}. Try again, it's actually: ${easyQuestion.ans}`);
            // Utilize the easyQuestion object to stop ReferenceErrors
            console.log(`\nThe question was: ${easyQuestion.question}, \nThe correct answer was: ${easyQuestion.ans}, \nYour answer was: ${userConvertedEasyAns}`);
        }
    }
    // Stop the timer from starting prematurely again
    clearTimeout(timerId);
    clearInterval(countdownDisplay);

    // Provide mathmatical calculation of score traditionally to display as well as show history of test ans
    const totalScore = 100 *  (testScore / easyTest.length);
    console.log(`\nScore: ${testScore} / ${easyTest.length} is ${totalScore.toFixed(1)}%`);
    // inside the loop make sure to use the object (queObj) for data and index (queNum) for the number
    console.log(`\nHistory:\n`);
    testHistory.forEach((queObj, queNum) => {
        /*
        Understanding this block:
            1. (queNum + 1) the actual question number
            2. (queNum.que) is the actual question asked
            3. (queNum.userA) what the user actually answered
            4. (queNum.status)  if the answer was right or wrong
        */
        console.log(`
            \n${queNum + 1}: ${queObj.que} \nUser Ans: ${queObj.userA} \nResult: ${queObj.status}`);
    });
};

/*
(3.) Plan MEDIUM test bank and answers 
1. Create an array of objects to implement MEDIUM test
*/
const mediumTest = [
    {
        question: "What is 2 * 2 = ?",
        ans: 4,
        feedback: "2 * 2 = 4"
    },
    {
        question: "What is 3 * 3 = ?",
        ans: 9,
        feedback: "3 * 3 = 9"
    },
    {
        question: "What is 4 * 4 = ?",
        ans: 16,
        feedback: "4 * 4 = 16"
    }
];

/* 
(4.) Planning mediumTest block's implementation:
1. use an asynchronous function to start MEDIUM test
2. create a for loop to iterate over array of objects to check user answer against the right answer bank
3. call timer function for 1min (convert to sec timer)
4. quiz should stop if user runs out of time
*/
async function startMediumTest () {
    /*
    1. call any inner helper functions for MEDIUM test
    2. use a for loop to iterate over quiz questions and gather user response
    3. perform error handling for user entries and control for type conversion
    4.  provide correct answer and/or feedback 
    5. call timer for 30 secs
    */
    console.log(`\nOK, ${userName} let's do an MEDIUM quiz. You have 20 seconds to complete the quiz!\n\n`);
    
    // start 20 sec timer and save the id to clear it 
    const timerId = easyMediumStartTimer();
    // set the formal start time of the user declaring the current system's time
    const startTime = Date.now();

    let testScore = 0;

    // track the test history
    let testHistory = [];

    // for loop for iteration
    for (let quest = 0; quest < mediumTest.length; quest++) {
        // check time on the clock to see if enough time has lasped
        if (timerDone) break;

        const mediumQuestion = mediumTest[quest];

        // Save the user's input for each question
        const userMediumAns = await rl.question(`${mediumQuestion.question}: `);

        // check the time left on the clock
        if (timerDone || (Date.now() - startTime) > 20000){
            timerDone = true;
            console.log(`\nSORRY ${userName}-- you were too slow!`);
            break;
        }

        // Perform type conversion since input is a string and utilize the .trim() method to cut unnecessary data from input
        const userConvertedMediumAns = Number(userMediumAns.trim());

        // Set the conditions for correct entries
        const isCorrect = userConvertedMediumAns === mediumQuestion.ans;

        // Set the conditions to save test history with push logic
        testHistory.push({
            que: mediumQuestion.question,
            userA: userConvertedMediumAns,
            status: isCorrect ? "CORRECT" : "WRONG"
        })

        /*
        1. Control logic to check if user answer against the correct answer in MEDIUM array object to trigger proper feedback
        2. increase the testScore if user entry is correct
        */
        if (isCorrect ) {
            console.log(`\nCorrect, ${userName}! We know that: ` + mediumQuestion.feedback);
            testScore++;
        } else {
           // Utilize the mediumQuestion object to stop ReferenceErrors
            console.log(`\nSorry ${userName}. Try again, it's actually: ${mediumQuestion.ans}`);
            console.log(`\nThe question was: ${mediumQuestion.question}, \nThe correct answer was: ${mediumQuestion.ans}, \nYour answer was: ${userConvertedMediumAns}`);
        }
    }
    // Stop the timer from starting prematurely again
    clearTimeout(timerId);
    clearInterval(countdownDisplay);

    // Provide mathmatical calculation of score traditionally to display and give clear intevals
    const totalScore = 100 *  (testScore / mediumTest.length);
    console.log(`\nScore: ${testScore} / ${mediumTest.length} is ${totalScore.toFixed(1)}%`);

 // inside the loop make sure to use the object (queObj) for data and index (queNum) for the number
    console.log(`\nHistory:\n`);
    testHistory.forEach((queObj, queNum) => {
        /*
        Understanding this block:
            1. (queNum + 1) the actual question number
            2. (queNum.que) is the actual question asked
            3. (queNum.userA) what the user actually answered
            4. (queNum.status)  if the answer was right or wrong
        */
        console.log(`
            \n${queNum + 1}: ${queObj.que} \nUser Ans: ${queObj.userA} \nResult: ${queObj.status}`);
    });
};

/*
(5.) Plan HARD test bank and answers 
1. Create an array of objects to implement HARD test
*/
const hardTest = [
    {
        question: "What is 2^3 = ?",
        ans: 8,
        feedback: "2 * 2 * 2 = 8"
    },
    {
        question: "What is 3^4 = ?",
        ans: 81,
        feedback: "3 * 3 * 3 * 3 = 81"
    },
    {
        question: "What is 4^5 = ?",
        ans: 1024,
        feedback: "4 * 4 * 4 * 4 * 4 = 1024"
    }
];

/* 
(6.) Planning hardTest block's implementation:
1. use an asynchronous function to start HARD test
2. create a for loop to iterate over array of objects to check user answer against the right answer bank
3. call timer function for 10 secs
4. quiz should stop if user runs out of time
*/
async function startHardTest () {
    /*
    1. call any inner helper functions for HARD test
    2. use a for loop to iterate over quiz questions and gather user response
    3. perform error handling for user entries and control for type conversion
    4. provide correct answer and/or feedback 
    5. call timer for 10 secs
    */
    console.log(`\nOK, ${userName} let's do an HARD quiz. You have 10 seconds to comlete it! \n\n`);
    
    // start hard timer with the proper ID to clear 
    const timerId = hardStartTimer();
    // set the formal start time of the user declaring the current system's time
    const startTime = Date.now();

    let testScore = 0;

    //  track the test history
    let testHistory = [];

    // for loop for iteration with history
    for (let quest = 0; quest < hardTest.length; quest++) {
        // check the timer and stop the quiz if timelimit has lasped
        if (timerDone) break;

        const hardQuestion = hardTest[quest];

        // Save the user's input for each question
        const userHardAns = await rl.question(`${hardQuestion.question}: `);

        // check the time left on the clock
        if (timerDone || (Date.now() - startTime) > 10000){
            timerDone = true;
            console.log(`\nSORRY ${userName}-- you were too slow!`);
            break;
        }

        // Perform type conversion since input is a string and utilize the .trim() method to cut unnecessary data from input
        const userConvertedHardAns = Number(userHardAns.trim());
        // Set the conditions for correct entries
        const isCorrect = userConvertedHardAns === hardQuestion.ans;

        // Set the conditions to save test history with push logic
        testHistory.push({
            que: hardQuestion.question,
            userA: userConvertedHardAns,
            status: isCorrect ? "CORRECT" : "WRONG"
        });

        /*
        1. Control logic to check if user answer against the correct answer in HARD array object to trigger proper feedback
        2. increase the testScore if user entry is correct
        */
        if (isCorrect ) {
            console.log(`\nCorrect, ${userName}! We know that: ` + hardQuestion.feedback);
            testScore++;
        } else {
            console.log(`\nSorry ${userName}! Try again it's actually: ${hardQuestion.ans}`);
            // Utilize the hardQuestion object to stop ReferenceErrors
            console.log(`\nThe question was: ${hardQuestion.question}, \nThe correct answer was: ${hardQuestion.ans}, \nYour answer was: ${userConvertedHardAns}`);
        }
    }
    // Stop the timer from starting prematurely with clearTimeout
    clearTimeout(timerId);
    clearInterval(countdownDisplay);

    // Provide mathmatical calculation of score traditionally to display
    const totalScore = 100 *  (testScore / hardTest.length);
    console.log(`\nScore: ${testScore} / ${hardTest.length} is ${totalScore.toFixed(1)}%`);

    // inside the loop make sure to use the object (queObj) for data and index (queNum) for the number - CORRECTION: Added display loop
    console.log(`\nHistory:\n`);
    testHistory.forEach((queObj, queNum) => {
        console.log(`
            \n${queNum + 1}: ${queObj.que} \nUser Ans: ${queObj.userA} \nResult: ${queObj.status}`);
    });
};

/* 
(7.) Planning a 20 second timer, it should end the quiz if time runs out:
1. make this a nested function to be called for appropriate test
*/
function easyMediumStartTimer() {
    // always clear the timer before starting clock
    timerDone = false;
    // functionality to display the countdown clock
    let secondsLeft = 20;
    countdownDisplay = setInterval(() => {
        secondsLeft--;
        // conditional logic for display
        if (secondsLeft > 0) {
            console.log(`\n${userName}, YOU BETTER HURRY UP YOU GOT: ${secondsLeft}!!`)
        } else {
            clearInterval(countdownDisplay);
        }
    }, 1000);
   
 // add a return statement so can capture the timerID and stop it when the quiz is completed
    return setTimeout(() => {
        timerDone = true;
        clearInterval(countdownDisplay);
        console.log(`\n\nTIMES UP ${userName}! Press enter to continue!!!`)
    }, 20000);
}

/* 
(8.) Planning a 10 second timer, it should end the quiz if time runs out:
1. make this a nested function to be called for appropriate test
*/
function hardStartTimer() {
    // always clear the timer before starting clock
    timerDone = false;
    // functionality to display the countdown clock
    let secondsLeft = 10;
    countdownDisplay = setInterval(() => {
        secondsLeft--;
        // conditional logic for display
        if (secondsLeft > 0) {
            console.log(`\n${userName}, YOU BETTER HURRY UP YOU GOT: ${secondsLeft}!!`)
        } else {
            clearInterval(countdownDisplay);
        }
    }, 1000);

    // add a return statement so can capture the timerID and stop it when the quiz is completed
    return setTimeout(() => {
        timerDone = true;
        clearInterval(countdownDisplay);
        console.log(`\n\nTIMES UP ${userName}! Press enter to continue!!!`)
    }, 10000);
}