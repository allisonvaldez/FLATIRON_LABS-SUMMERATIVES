// require any necessary functions 
require("datejs");

// Step 1: Create a combineUsers function - Create a function named combineUsers and assign the arguments:
function combineUsers(...args) {
  // Step 2: define the object and determine its users
  let combinedObject = {
    users: []
  };

  // Step 3: loop throuugh the array of arrays
  for (let i = 0; i < args.length; i++){
    let currentArray = args[i];
    // Step 4: update the users and spread the old array into a new array by merging
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  // Step 5: get the right demographics of date
  let today = Date.today();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  // return it skips 6??
  return combinedObject;
}

// export the module for global use in the app
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
