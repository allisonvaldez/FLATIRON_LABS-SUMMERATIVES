const calculateDiscountedPrice = require('../discountCalculator');

test('calculates total price without discount correctly', () => {
    expect(calculateDiscountedPrice(5, 20)).toBe(100);
    expect(calculateDiscountedPrice(1, 50)).toBe(50);
    expect(calculateDiscountedPrice(9, 10)).toBe(90);
});

test('calculates total price with discount correctly', () => {
    expect(calculateDiscountedPrice(10, 20)).toBe(180);
    expect(calculateDiscountedPrice(15, 30)).toBe(405);
    expect(calculateDiscountedPrice(20, 25)).toBe(450);
});
