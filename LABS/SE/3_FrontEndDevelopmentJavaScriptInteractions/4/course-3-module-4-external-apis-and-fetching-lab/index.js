const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Step 1: Fetch Alerts for a State from the API
// Create a function, such as fetchWeatherAlerts(state), to make a GET request to the API.
// Use fetch() to retrieve weather alerts based on the state abbreviation provided by the user.
// fetch(`https://api.weather.gov/alerts/active?area=${STATE_ABBR}`)
function fetchWeatherAlerts(state) {
  fetch(`${weatherApi}${state}`)
    .then(response => {
      if (!response.ok) throw new Error("Network failure");
      return response.json();
    })
    // Parse the JSON response and log the data to the console for testing for now. We'll use this data soon.
    .then(data => {
      console.log(data);
      displayAlerts(data, state);
      // Step 3: Clear the input field.
      document.querySelector("#state-input").value = "";
    })
    // Handle network and API errors gracefully using catch and console.log for now.
    .catch(errorObject => {
      console.log(errorObject.message);
      displayError(errorObject.message);
    });
}

// Step 2: Display the Alerts on the Page
// Create a function, such as displayAlerts(data), to dynamically update the DOM with weather information.
function displayAlerts(data, state) {
  const display = document.querySelector("#alerts-display");
  // Update the weather alerts display with fresh data, removing any previous data.
  display.innerHTML = "";

  // When the fetch is successful, show:
  // A summary message using the `title` property and number of alerts (under the `features` key)
  // THE TEST: expects exact string "Weather Alerts: #"
  const alertCount = data.features.length;
  const summary = document.createElement("p");
  summary.textContent = `Weather Alerts: ${alertCount}`;
  display.appendChild(summary);

  // A list of alert headlines, each as its own line or bullet.
  const list = document.createElement("ul");
  data.features.forEach(alert => {
    const li = document.createElement("li");
    li.textContent = alert.properties.headline;
    list.appendChild(li);
  });
  display.appendChild(list);

  // Step 3: Clear and Reset the UI.
  const errorDiv = document.querySelector("#error-message");
  errorDiv.textContent = "";
  errorDiv.classList.add("hidden");
}


// Step 4: Implement Error Handling
// When something goes wrong (e.g., empty input, bad state code, or network failure):
// Display the message in the error.
// Show the message in the dedicated <div id="error-message">.
function displayError(message) {
  const errorDiv = document.querySelector("#error-message");
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
  // Clear the display when an error occurs
  document.querySelector("#alerts-display").innerHTML = "";
}

// Step 5: Optional Additional Features
// Input Validation: Validate that the user input is two capital letters before making the request.
document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.querySelector("#fetch-alerts");
  
  if (fetchBtn) {
    fetchBtn.addEventListener("click", () => {
      const stateInput = document.querySelector("#state-input");
      const stateValue = stateInput.value.trim().toUpperCase();

      if (stateValue === "") {
        displayError("Please enter a state abbreviation");
      } else {
        fetchWeatherAlerts(stateValue);
      }
    });
  }
});