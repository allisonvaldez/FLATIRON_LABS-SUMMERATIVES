const { products, logFirstProduct, updateProductName, removeLastProduct, addProduct } = require('../inventoryManagement');

describe('Product Inventory Management System', () => {
    
    beforeEach(() => {
        // Reset the products array before each test
        products.length = 0; // Clear the array
        products.push("Laptop", "Phone", "Headphones", "Monitor"); // Reinitialize the array
    });

    test('logFirstProduct should log the first product', () => {
        console.log = jest.fn(); // Mock console.log
        logFirstProduct();
        expect(console.log).toHaveBeenCalledWith("Laptop");
    });

    test('updateProductName should update the product name at the given index', () => {
        updateProductName(1, "Smartphone");
        expect(products[1]).toBe("Smartphone");
    });

    test('removeLastProduct should remove the last product from the array', () => {
        removeLastProduct();
        expect(products).toEqual(["Laptop", "Phone", "Headphones"]);
    });

    test('addProduct should add a new product to the array', () => {
        addProduct("Tablet");
        expect(products[products.length - 1]).toBe("Tablet");
    });
});
