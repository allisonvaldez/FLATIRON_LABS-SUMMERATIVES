### Lab: CSS Fundamentals

**Estimate Completed Time: 30-60 min.**

#### Overview
As a junior web developer at a creative design agency, you've been assigned to improve the user interface of a client's portfolio website. The website has basic HTML structure but lacks visual appeal. Your task is to enhance the look and feel of the website using advanced CSS techniques learned in this module.

This lab will assess your ability to apply CSS selectors, properties, values, positioning, layout, and responsive design. You'll create a visually engaging and user-friendly webpage that showcases the client's work.

#### Tools and Resources
- VSCode (or any code editor)
- Web browser for testing
- GitHub repository ((https://github.com/learn-co-curriculum/phase-0-js-css-fundamentals-lab.git))
- Node.js installed

**Instructions:**

1. **Fork and Clone the Repository**
   - Fork the provided GitHub repository to your account.
   - Clone the forked repository to your local machine.
   - Navigate to the project directory and run `npm install` to set up the project dependencies.
   - Run `npm test` to test your code and open the `index.html` file in a web browser to view the changes. You need to save the file and refresh your browser to see the changes.

2. **Analyze and Plan**
   - Review the provided HTML structure in the `index.html` file.
   - Define your styling goals for the following elements: 
     - Navigation bar
     - Portfolio items
     - Footer

3. **Create and Link CSS File**
   - Create a new file named `style.css` in the project directory.
   - Link the CSS file in the `index.html` file within the `<head>` section.

4. **Style the Navigation Bar**
   - Target the navigation bar using a class selector.
     - Set the background color to `#333`.
     - Set the font size to `1.2em`.
     - Add padding of `1em`.
     - Center-align the text.
     - Set the position to `fixed`.
     - Set the width to `100%`.
     - Set the top to `0`.
     - Set the z-index to `1000`.
   - For the unordered list within the navigation bar:
     - Set the list-style to `none`.
     - Set the margin to `0`.
     - Set the padding to `0`.
   - For each list item in the navigation bar:
     - Set them to display `inline`.
     - Add margin of `0 1em`.
   - Style the anchor tags within the list items:
     - Set the text color to `#fff`.

5. **Style the Main Content**
   - Add padding to the top of the main content to ensure it is not hidden behind the fixed navigation bar.
     - Set `padding-top` to `5em`.
   - For each section within the main content:
     - Add padding of `2em 1em`.
     - Center-align the text.
   - For the home section:
     - Increase the font size of the main heading to `2.5em`.
     - Add margin-bottom of `0.5em`.
     - Set the paragraph font size to `1.2em`.
     - Set the paragraph color to `#666`.

6. **Style the Portfolio Section**
   - Use a flexbox layout for the portfolio container:
     - Set display to `flex`.
     - Set `flex-wrap` to `wrap`.
     - Justify content to space items around the container.
     - Add padding of `1em`.
   - Style each portfolio item:
     - Set the background color to `#fff`.
     - Add a border of `1px solid #ddd`.
     - Add margin of `1em` around each item.
     - Add padding of `1em` on all sides.
     - Apply a box shadow with the value `0 4px 8px rgba(0, 0, 0, 0.1)`.
     - Set the width to `30%`.
     - Set `box-sizing` to `border-box`.
     - Apply a transition for the transform property with a duration of `0.3s`.
   - Style the headings within the portfolio items:
     - Make the text bold.
     - Add margin-bottom of `0.5em`.
   - Style the paragraphs within the portfolio items:
     - Add margin-bottom of `0.5em`.
     - Set the color to `#666`.
   - Style the images within the portfolio items:
     - Set the width to `100%`.
     - Apply a box shadow with the value `0px 2px 5px rgba(0, 0, 0, 0.1)`.

7. **Add Hover Effect for Portfolio Items**
   - Apply a scaling transformation to portfolio items when hovered over:
     - Set the transform property to `scale(1.05)` on hover.

8. **Style the Footer**
   - Target the footer using an ID selector:
     - Set the background color to `#222`.
     - Set the text color to `#fff`.
     - Add padding of `2em`.
     - Center-align the text.
     - Set the position to `relative`.
     - Set the bottom to `0`.
     - Set the width to `100%`.

9. **Organize and Test**
    - Save your CSS file.
    - Open the `index.html` file in a web browser to view the changes.
    - Ensure all the tests are passing.
