// Handle Button Clicks:

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = "rgb(127, 255, 212)"; 
  document.body.style.color = "black";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
}

// Capture Keyboard Input:

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyPressDisplay = document.querySelector("#keyPressDisplay");
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input:

// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input
  const textInputDisplay = document.querySelector("#textInputDisplay");
  const textInput = document.querySelector("#textInput");
  
  if (textInputDisplay) {
    // If event exists, use event.target.value. 
    // Otherwise, check the textInput element directly.
    const val = (event && event.target) ? event.target.value : (textInput ? textInput.value : "");
    textInputDisplay.textContent = `You typed: ${val}`;
  }
}

// Attach Event Listeners:
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  const colorButton = document.querySelector("#changeColorButton");
  if (colorButton) {
    colorButton.addEventListener("click", changeBackgroundColor);
  }

  // Attach event listener to reset background color when the body is double-clicked
  const resetButton = document.querySelector("#resetColorButton");
  if (resetButton) {
    resetButton.addEventListener("dblclick", resetBackgroundColor);
  }

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  const textInput = document.querySelector("#textInput");
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};