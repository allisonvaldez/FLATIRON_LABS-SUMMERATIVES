// Question 1:
function calculateTax(amount) {
    let tax = amount * .10;
    return tax;
}
const test1 = calculateTax(100);
console.log(test1);

// Question 2:
function convertToUpperCase(text) {
    let toUpper = text.toUpperCase();
    return toUpper;
}
const test2 = convertToUpperCase("a");
console.log(test2);

// Question 3:
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
const test3 = findMaximum(1, 2);
console.log(test3);

// Question 4:
function isPalindrome(word) {
    //Perform the reverse of the parameter
    const reverseWord = word.split('').reverse().join('');

    //Strictly compare the parameter and its reverse
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}
const test4 = isPalindrome("yes");
console.log(test4);

// Question 5:
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const newPrice = originalPrice - ((originalPrice) * (discountPercentage / 100))
    return newPrice
}
const test5 = calculateDiscountedPrice(100, 20);
console.log(test5);

// This is required for the test to function properly  
module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};