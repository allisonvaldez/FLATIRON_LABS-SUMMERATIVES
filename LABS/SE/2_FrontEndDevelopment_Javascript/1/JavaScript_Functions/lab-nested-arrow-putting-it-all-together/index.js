function createLoginTracker(userInfo){

  // tracking number of login attampes
  let attemptCount = 0;

  // define and return anonymous nested arrow function with to handle login attempts
  return (passwordAttempt) => {
    attemptCount ++;

    // automatically check the password attempt count to trigger if >3 but not as a log with count number
    if (attemptCount > 3){
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password && attemptCount <= 3){
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    } 
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};