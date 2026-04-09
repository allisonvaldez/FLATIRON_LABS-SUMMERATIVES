### Lab: Creating a Responsive Cat Website with Flexbox

**Estimate Completed Time:** 30-60 min.

#### Overview
As a junior web developer, you've been assigned to create a responsive website for a client who runs a cat adoption agency. The website needs to display various cat breeds in a visually appealing and accessible manner. Your task is to build this website using CSS Flexbox to ensure it looks great on all devices, from desktops to mobile phones.

This lab will assess your ability to apply CSS Flexbox properties to create a responsive layout, ensuring an optimal user experience across different screen sizes.

#### Tools and Resources
- VSCode (or any code editor)
- Web browser for testing
- GitHub repository (https://github.com/learn-co-curriculum/-phase-0-js-css-layouts-lab.git)
- Node.js installed

**Instructions:**

1. **Fork and Clone the Repository**
   - Fork the provided GitHub repository to your account.
   - Clone the forked repository to your local machine.
   - Navigate to the project directory and run `npm install` to set up the project dependencies.
   - Run `npm test` to test your code and open the `index.html` file in a web browser to view the changes. Save the file and refresh your browser to see the changes.

2. **Analyze and Plan**
   - Review the provided HTML structure in the `index.html` file.
   - Define your styling goals for the following elements:
     - Cat breed cards
     - Page layout
     - Responsive design

3. **Create and Link CSS File**
   - Create a new file named `style.css` in the project directory.
   - Link the CSS file in the `index.html` file within the `<head>` section.

4. **Style the Cat Breed Cards**
   - Target the cat breed container using a class selector:
     - Set the display property to `flex`.
     - Set `flex-wrap` to `wrap`.
     - Set `justify-content` to `space-around`.
     - Add `padding` of `2em`.
   - For each cat breed card:
     - Set the `flex` property to `1 1 300px`.
     - Set the `margin` to `1em`.
     - Set the `padding` to `1em`.
     - Set the `border` to `1px solid #ddd`.
     - Set the `border-radius` to `8px`.
     - Set the `box-shadow` to `0 4px 8px rgba(0,0,0,0.1)`.
     - Set the `text-align` to `center`.
     - Add a `transition` for the `transform` property with a duration of `0.3s`.
   - For the images within each cat breed card:
     - Set the `max-width` to `100%`.
     - Set the `height` to `auto`.
     - Set the `border-radius` to `8px`.
   - For the headings within each cat breed card:
     - Set the `margin` to `0.5em 0`.
   - For the paragraphs within each cat breed card:
     - Set the `margin` to `0.5em 0 1em`.

5. **Make the Layout Responsive**
   - Use media queries to adjust the layout for smaller screens:
     - Set the `flex-direction` of the cat breed container to `column`.
     - Set `align-items` to `center`.
     - Ensure each cat breed card takes up the full width of the container by setting the `flex` property to `1 1 100%`.
     - Set the `max-width` of each cat breed card to `100%`.

6. **Add Hover Effect for Cat Breed Cards**
   - Apply a scaling transformation to cat breed cards when hovered over:
     - Set the `transform` property to `scale(1.05)`.

7. **Organize and Test**
   - Save your CSS file.
   - Open the `index.html` file in a web browser to view the changes.
   - Ensure all elements are styled correctly and the layout is responsive.
   - Run `npm test` to test your code and ensure all tests are passing.
