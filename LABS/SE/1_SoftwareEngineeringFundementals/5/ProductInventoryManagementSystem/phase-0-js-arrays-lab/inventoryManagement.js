// Task 2: Create the Product Inventory Array
let products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor"
];

// Task 3: Access Product Information
function logFirstProduct() {
  let firstProduct = products[0];
  console.log(firstProduct);
  return firstProduct;
}
let test1 = logFirstProduct(products);
console.log(test1);

// Task 4: Add a Product
function addProduct(item) {
  return products.push(item);
}
addProduct("Backpack");
console.log(products);

// Task 5: Update Product Information
function updateProductName(location, prod) {
  return products[location] = prod;
}
updateProductName(0, "Charger");
console.log(products);

// Task 6: Remove a Product
function removeLastProduct() {
  return products.pop();
}
removeLastProduct();
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
