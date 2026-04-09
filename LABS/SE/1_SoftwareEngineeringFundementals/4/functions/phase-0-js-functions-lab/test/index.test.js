const { convertToUpperCase, calculateTax, findMaximum, isPalindrome, calculateDiscountedPrice } = require('../index');

describe('calculateTax', () => {
  test('should correctly calculate 10% tax of a given amount', () => {
    const amount = 100;
    const expectedTax = 10;
    const result = calculateTax(amount);

    expect(result).toBe(expectedTax);
  });

  test('should return 0 for amount 0', () => {
    const amount = 0;
    const expectedTax = 0;
    const result = calculateTax(amount);

    expect(result).toBe(expectedTax);
  });

  test('should correctly calculate tax for a large amount', () => {
    const amount = 10000;
    const expectedTax = 1000;
    const result = calculateTax(amount);

    expect(result).toBe(expectedTax);
  });

  test('should handle negative amounts', () => {
    const amount = -50;
    const expectedTax = -5;
    const result = calculateTax(amount);

    expect(result).toBe(expectedTax);
  });
});

describe('convertToUpperCase', () => {
  test('should convert lowercase letters to uppercase', () => {
    const input = 'hello world';
    const expectedOutput = 'HELLO WORLD';
    const result = convertToUpperCase(input);

    expect(result).toBe(expectedOutput);
  });

  test('should handle an already uppercase string', () => {
    const input = 'HELLO WORLD';
    const expectedOutput = 'HELLO WORLD';
    const result = convertToUpperCase(input);

    expect(result).toBe(expectedOutput);
  });

  test('should handle an empty string', () => {
    const input = '';
    const expectedOutput = '';
    const result = convertToUpperCase(input);

    expect(result).toBe(expectedOutput);
  });

  test('should handle a string with mixed case letters', () => {
    const input = 'Hello World';
    const expectedOutput = 'HELLO WORLD';
    const result = convertToUpperCase(input);

    expect(result).toBe(expectedOutput);
  });

  test('should handle a string with special characters and numbers', () => {
    const input = 'Hello World 123! @#';
    const expectedOutput = 'HELLO WORLD 123! @#';
    const result = convertToUpperCase(input);

    expect(result).toBe(expectedOutput);
  });
});

describe('findMaximum', () => {
  test('should return the greater of two positive numbers', () => {
    const num1 = 10;
    const num2 = 5;
    const expectedResult = 10;
    const result = findMaximum(num1, num2);

    expect(result).toBe(expectedResult);
  });

  test('should return the greater of two negative numbers', () => {
    const num1 = -5;
    const num2 = -10;
    const expectedResult = -5;
    const result = findMaximum(num1, num2);

    expect(result).toBe(expectedResult);
  });

  test('should return the greater of a positive and a negative number', () => {
    const num1 = 3;
    const num2 = -7;
    const expectedResult = 3;
    const result = findMaximum(num1, num2);

    expect(result).toBe(expectedResult);
  });

  test('should return the same number if both numbers are equal', () => {
    const num1 = 7;
    const num2 = 7;
    const expectedResult = 7;
    const result = findMaximum(num1, num2);

    expect(result).toBe(expectedResult);
  });
});

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    const input = 'radar';
    const expectedOutput = true;
    const result = isPalindrome(input);

    expect(result).toBe(expectedOutput);
  });

  test('should return false for a non-palindrome', () => {
    const input = 'hello';
    const expectedOutput = false;
    const result = isPalindrome(input);

    expect(result).toBe(expectedOutput);
  });

  test('should return true for a single character', () => {
    const input = 'a';
    const expectedOutput = true;
    const result = isPalindrome(input);

    expect(result).toBe(expectedOutput);
  });

  test('should return true for an empty string', () => {
    const input = '';
    const expectedOutput = true;
    const result = isPalindrome(input);

    expect(result).toBe(expectedOutput);
  });
});

describe('calculateDiscountedPrice', () => {
  test('should correctly calculate the discounted price', () => {
    const originalPrice = 100;
    const discountPercentage = 20;
    const expectedDiscountedPrice = 80;
    const result = calculateDiscountedPrice(originalPrice, discountPercentage);

    expect(result).toBe(expectedDiscountedPrice);
  });

  test('should return the original price when discount is 0%', () => {
    const originalPrice = 100;
    const discountPercentage = 0;
    const expectedDiscountedPrice = 100;
    const result = calculateDiscountedPrice(originalPrice, discountPercentage);

    expect(result).toBe(expectedDiscountedPrice);
  });

  test('should handle a discount percentage of 100%', () => {
    const originalPrice = 100;
    const discountPercentage = 100;
    const expectedDiscountedPrice = 0;
    const result = calculateDiscountedPrice(originalPrice, discountPercentage);

    expect(result).toBe(expectedDiscountedPrice);
  });

  test('should handle a discount percentage greater than 100%', () => {
    const originalPrice = 100;
    const discountPercentage = 150;
    const expectedDiscountedPrice = -50;
    const result = calculateDiscountedPrice(originalPrice, discountPercentage);

    expect(result).toBe(expectedDiscountedPrice);
  });
});
