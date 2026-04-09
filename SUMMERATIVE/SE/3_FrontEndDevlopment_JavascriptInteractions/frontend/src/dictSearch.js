/* This file is in charge of the Search Component of the form:
1. Start with importing necessary states and files
2. Make the DictionarySearch function globally available in the app via export
*/
import { useState } from "react";

// Export the default function for global usage in the app
export default function DictionarySearch() {

    // Establish the begining states for the word, result, and error variables as empty strings and null
    const [word, setWord] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    /*
    Declare a validUserEntry function to check if user entry is valid based on Regex capability of checking
    for capitalization, lowercase letters, allowing for hyphens, and atleast 1 character with no trailing symbols
    */
    function isValidUserEntry(str)  {
        // Declare characters not allowed with regex
        const regex = /^[A-Za-z-]+$/;

        // Execute the Regex word test on the word provided
        const isMatch = regex.test(str);

        // Return the results of the test
        if (isMatch) {
            return true;
        } else {
            return false;
        }
    }

    // Use an async functoin to control for the form's default behavior on form submission
    async function handleSubmit (e) {

        //  Initialize the necessary variable states as empty or null
        e.preventDefault();
        setError("");
        setResult(null);

        /*
        Perform error handling for input validation. Control for:
            1.  Entry of an empty string
            2. Number or symbols entry using Regex
            2. Error trying to communicate with the API
            3. If no definitions found
        */

        // Error handling for empty user entry
        if (!word.trim()) {
            setError("Please provide a word to search the dictionary.");
            return;
        }

        // Error handling using Regex 
        if (!isValidUserEntry(word)) {
            setError("Please only enter letters, or hyphens, no other entries are allowed.");
            return;
        }

        // Error handling for fetching data from the API
        try {
            // Declare a response variable to save the await-fetch function call to the API with the provided word
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            
            // Perform error handling if wrong word entered or experiencing trouble communicating with the API
            if (!response.ok) {
                setError("Incorrectly spelled word. Try again!")
                return;
            }

            // Declare a data varaible to save the returned parsed json data from the API
            const data = await response.json();

            // Perform error handling if no definition found
            if  (data.title === "No Definitions Found") {
                setError("No definition is available for that word. Try again!");
                return;
            } else {
                // Otherwise display the data
                setResult(data[0]);
            }

        } catch (error ) {
            setError("Error fetching a definition, please try again!")
            return;
        }
    };
    
    // Here we display the form and whats returned from the API call and any necessary error to display make sure up functionality for sound
    return (
        <div>
            <h3>Start by entering a word in the text box:</h3>
            <p>Please note that only correctly spelled words are allowed. Please do not enter numbers, empty entries, or special symbols and/or characters!</p>

            {/* Create the form with input being required to control for error handling*/}
            <form onSubmit={handleSubmit}>
                <label>Enter a word to search: </label>
                <input 
                    id="textBox"
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>

            {/* Section to display potential errors */}
            {error && <p style={{color: "red"}}>{error}</p>}
            
            {/* Section to display the results returned and to play audio of the word returned */}
            {result && (
                <div>
                    <h2>{result.word}</h2>

                    {/* Try audio feature */}
                    {result.phonetics && result.phonetics.find(p => p.audio) && (
                        <button 
                            className="audioButton"
                            onClick={() => {
                            const audioUrl = result.phonetics.find(p => p.audio).audio;
                            new Audio(audioUrl).play();
                        }}>
                        Press to play audio!
                        </button>

                    )}
                    {result.meanings.map((m, i) => (
                        <div key={i}>
                            <strong>{m.partOfSpeech}</strong>
                            <p>{m.definitions[0].definition}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



/*
submit button
A section to display results with sounds for audio playback

CSS - Use this to design and style the page:
Design the page layout and style.
Use classes or IDs to style the search bar and results section. 
*/