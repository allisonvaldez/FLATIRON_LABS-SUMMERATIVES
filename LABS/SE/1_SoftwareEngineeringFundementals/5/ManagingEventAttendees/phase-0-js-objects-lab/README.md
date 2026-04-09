### Lab Exercise: Managing Event Attendees

**Overview**

**Scenario:** You are working for an event management company, and your task is to manage event attendees. Each attendee is represented as an object with properties such as attendee ID, name, event, ticket type, and ticket price. This lab will challenge you to create and manipulate JavaScript objects to handle event attendees effectively.

**Estimated Completion Time:** 30-60 minutes

**Tools and Resources**
- **Tools:** Visual Studio Code (VSCode), Node.js
- **Resources:** MDN Web Docs: Working with Objects, JavaScript 2 module content
- **Setup:** Fork and clone the provided GitHub repository, and run `npm install` to set up the project locally. https://github.com/learn-co-curriculum/phase-0-js-objects-lab.git

**Instructions**

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Declare and Initialize an Attendee Object:**
   - Create a variable named `attendee` and assign it an object with the following properties:
     - `attendeeId` (a string) with the value `"T001"`
     - `name` (a string) with the value `"Alice Smith"`
     - `event` (a string) with the value `"JavaScript Conference"`
     - `ticketType` (a string) with the value `"VIP"`
     - `ticketPrice` (a number) with the value `150.00`

3. **Create a Function to Log Attendee Name**
   - Create a function named `logAttendeeName` that takes the `attendee` object as a parameter and logs the `name`.

4. **Create a Function to Log Ticket Price**
   - Create a function named `logTicketPrice` that takes the `attendee` object as a parameter and logs the `ticketPrice`.

5. **Create a Function to Update Ticket Type**
   - Create a function named `updateTicketType` that takes the `attendee` object and a new ticket type as parameters, and updates the `ticketType` property of the `attendee` object.

6. **Create a Function to Update Ticket Price**
   - Create a function named `updateTicketPrice` that takes the `attendee` object and a new ticket price as parameters, and updates the `ticketPrice` property of the `attendee` object.

7. **Create a Function to Remove the Event Property**
   - Create a function named `removeEventProperty` that takes the `attendee` object as a parameter and removes the `event` property.

8. **Create a Function to Add a Checked-in Property**
   - Create a function named `addCheckedInProperty` that takes the `attendee` object as a parameter and adds a new property `checkedIn` with the value `true`.


