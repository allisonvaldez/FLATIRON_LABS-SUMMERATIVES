// Task 2: Declare and Initialize an Attendee Object
let attendee = {};
attendee.attendeeId = "T001";
attendee.name = "Alice Smith";
attendee.event = "JavaScript Conference";
attendee.ticketType = "VIP";
attendee.ticketPrice = 150.00;

// Task 3: Create a Function to Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);
};
// let test1 = logAttendeeName(attendee);
// console.log(test1)

// Task 4: Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
};
// let test2 = logTicketPrice(attendee);
// console.log(test2)

// Task 5: Create a Function to Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType
  return attendee;
};
// let test3 = updateTicketType(attendee, "General");
// console.log(test3)

// Task 6: Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
  return attendee
};
// let test4 = updateTicketPrice(attendee, 200.00);
// console.log(test4)

// Task 8: Create a Function to Add a Checkedin Property 
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
  return attendee;
};
// let test6 = addCheckedInProperty(attendee);
// console.log(test6)

// Task 7: Create a Function to Remove Event Property 
function removeEventProperty(attendee) {
  delete attendee.event;
  return attendee;
};
// This is triggering the assignment to crash removing it and trying again
// let test5 = removeEventProperty(attendee);
// console.log(test5);

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};