# Lab: HTML 

For this lab, imagine you are creating a travel blog and want to build a webpage showcasing your recent trip to Fire Island. You will need to include the following pieces on your webpage:

* Webpage Title: "Adventures in Fire Island"
* Hero Section: Include a large banner image showcasing the park's scenery (use <img> tag with appropriate attributes).
* Blog Post Summary: Write a short paragraph using <p> tags describing your experience and highlights of the trip.
* Image Gallery: Include a section with multiple images from your trip. Here are two options:
  * Use unordered lists (<ul>) and list items (<li>) with images (<img> tags) within each list item.
* Call to Action: Add a section with a link using the <a> tag, encouraging readers to explore the park themselves (e.g., "Plan your National Park adventure today!").

## Tools and Resources

* VSCode
* [GitHub Repo](https://github.com/learn-co-curriculum/html-travel-blog-lab)
* MDN: HTML

## Setup Steps

### Lab Setup 1: Fork Lab Repository

Fork the [GitHub lab repository](https://github.com/learn-co-curriculum/html-travel-blog-lab) provided to your own GitHub account. This will create a personal copy of the repository, which is necessary to submit the assignment.

### Lab Setup 2: Clone the Lab Repository with Git

1. Clone the forked repository to your local machine using Git. After navigating to the folder where you would like to keep your work, use the command `git clone` followed by the ssh link of your own repository on Github.
2. Use the `cd` command to move into the directory/folder of the lab you just cloned.
3. Use the `ls` command to see what files and folders you have in your current directory.
4. Use the `code .` command to open up the local repo in VSCode.

## Instructions

### Task 1: Initial Preparation

1. Navigate to the provided GitHub repository.
2. An HTML file called `index.html` is provided in the repo.

### Task 2: Basic HTML Structure

Write the basic HTML structure with `<DOCTYPE>`, `<html>`, `<head>`, `<title>`, and `<body>` sections.

### Task 3: Hero Section

Build the Hero Section:
1. Within the `<body>`, add an appropriate heading tag (e.g., `<h1>`) for the webpage title.
2. Include an `<img>` tag with a large banner image representing the national park. Ensure you set the `src` attribute to the image filename and provide a descriptive `alt` text attribute.

### Task 4: Blog Post Summary

Create a Blog Post Summary:
* Use one or more `<p>` tags to write a concise paragraph summarizing your travel experience and highlighting key features of the park.

### Task 5: Image Gallery

Build out the Image Gallery:
1. Create an `<h2>` tag for the title with the text "Gallery: Fire Island".
2. Include a `<ul>` element.
3. Within the `<ul>`, use `<li>` tags for each image in your gallery.
4. Inside each `<li>` tag, add an `<img>` tag with the image source (`src`) and alt text attribute.

### Task 6: Call to Action

Build the Call to Action Section:
1. Add a section with a heading tag (e.g., `<h3>`) like "Explore the Adventure!"
2. Include a paragraph (`<p>`) encouraging readers to visit the park.
3. Use an `<a>` tag to create a link to a relevant webpage (e.g., [the National Park Service website for Fire Island](https://www.nps.gov/fiis/index.htm)).

## Important 

Before you submit your solution, you need to save your progress with git.
1. Add your changes to the staging area by executing `git add .`
2. Create a commit by executing `git commit -m "Your commit message"`
3. Push your commits to GitHub by executing `git push origin main` or `git push origin master`, depending on the name of your branch (use `git branch` to check on which branch you are).

## Submission and Grading Criteria

1. Use the rubric in Canvas as a guide for how this lab is graded.
2. Your submission will be automatically scored in CodeGrade, using the most recent commit. Remember to make sure you have pushed your commit to GitHub before submitting your assignment. Please note, you have two attempts to submit, and all criterion must be met to pass the AutoTest. 
3. You can review your submission in CodeGrade and see your final score in your Canvas gradebook.
4. When you are ready to submit, click the Load Lab: HTML button below to launch CodeGrade.
  * Click on + Create Submission. Connect your repository for this lab.
  * For additional information on submitting assignments in CodeGrade: Getting Started in Canvas
