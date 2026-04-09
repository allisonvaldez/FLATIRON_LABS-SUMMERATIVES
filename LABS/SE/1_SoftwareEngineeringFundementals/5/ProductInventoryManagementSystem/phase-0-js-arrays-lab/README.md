# Lab: Product Inventory Management System

## Overview

In this lab, you will create a simple system to manage a store's product inventory. You will use JavaScript arrays to store, update, and remove product information. This practice will help you get comfortable with basic array operations.

### Scenario

As a new junior developer at an online store, you are asked to help manage the product inventory. You will build a basic system using arrays to handle tasks like adding products, updating product names, and removing products.

### Objective

By the end of this lab, you should be able to:

- Declare and initialize an array to store product data.
- Access and print specific product details using their index.
- Modify existing product information.
- Remove a product from the array.

## Tools and Resources

- **Node.js:** To run your JavaScript files from the command line.
- **VSCode:** To write and execute your JavaScript code.
- **GitHub:** You will fork and clone the provided repository to get started. https://github.com/learn-co-curriculum/phase-0-js-arrays-lab.git

## Instructions

### Fork and Clone the Repository

1. Go to the provided GitHub repository link.
2. Click on the "Fork" button to create your own copy of the repository.
3. Clone your forked repository to your local machine.
4. Install the necessary dependencies:
   ```sh
   npm install
   ```

### Create the Product Inventory Array

1. Open the `inventoryManagement.js` file in VS Code.

2. **Create the Product Inventory Array**
   - Open the `inventoryManagement.js` file in VS Code.
   - Create an array called `products` to store product names. Use the following four strings:
     - "Laptop"
     - "Phone"
     - "Headphones"
     - "Monitor"

3. **Access Product Information**
   - Write a function called `logFirstProduct` to console log the details of the first product in the array.

4. **Update Product Information**
   - Write a function called `updateProductName` to change the name of a product. This function should take the product's position in the array and the new name as arguments.

5. **Remove a Product**
   - Write a function called `removeLastProduct` to remove the last product from the array.

