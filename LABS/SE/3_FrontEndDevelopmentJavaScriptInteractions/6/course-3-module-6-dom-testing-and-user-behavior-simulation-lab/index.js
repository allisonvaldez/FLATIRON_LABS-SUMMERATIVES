// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function simulateClick(containerId, message) {
    const button = document.getElementById("simulate-click");

    if (button) {
        button.addEventListener("click", () => {
            addElementToDOM(containerId, message);
        });
    }
    // for test
    addElementToDOM(containerId, message);
}

function handleFormSubmit(formId, containerId) {
    const form = document.getElementById(formId);
    const input = document.getElementById("user-input");

    if (form && input) {
        // Error handle if empty
        if (!input.value || input.value.trim() === "") {
            displayError("Input cannot be empty");
        } else {
            addElementToDOM(containerId, input.value);
            hideError();
        }
    }
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(containerId, content) {
    const container = document.getElementById(containerId);
    if (container) {
        const newElement = document.createElement("div");
        newElement.textContent = content;
        container.appendChild(newElement);
    }
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
function displayError(message) {
    const errorDiv = document.getElementById("error-message");
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove("hidden");
    }
}

function hideError() {
    const errorDiv = document.getElementById("error-message");
    if (errorDiv) {
        errorDiv.classList.add("hidden");
        errorDiv.textContent = "";
    }
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    return element;
}

//Needed for Jest export all functions for global usage in the app
module.exports = { 
    addElementToDOM, 
    removeElementFromDOM, 
    simulateClick, 
    handleFormSubmit, 
    createElement 
};