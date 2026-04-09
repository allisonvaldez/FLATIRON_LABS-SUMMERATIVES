document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Connect 
  // Select Form:
  // The form is under the id of create-task-form.
  const taskForm = document.querySelector("#create-task-form");

  // Add an event listener to the form.
  // Add "submit" for the type of event.
  // Add the arrow function.
  taskForm.addEventListener("submit", (event) => {
    // Use preventDefault().
    event.preventDefault();

    // Step 3: Handle form data
    // Using event gather data into an object:
    // Use the name new-task-description to select the correct target from the event, and save it to a variable.
    const newTaskInput = document.querySelector("#new-task-description");
    const taskDescription = newTaskInput.value;

    // Create a new function called buildToDo() and call it.
    // Pass in the saved task.
    buildToDo(taskDescription);

    // Optional: Clear the input after submission
    event.target.reset();
  });
});

// Step 4: Add item to list and display
// Within buildToDo:
function buildToDo(task) {
  // Create a new li element.
  const li = document.createElement("li");

  // Add the task as the textContent.
  li.textContent = task;

  // Append the li element to the task list.
  // The task list is under the id of tasks.
  const taskList = document.querySelector("#tasks");
  taskList.appendChild(li);
}