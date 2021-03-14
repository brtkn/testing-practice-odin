const { TestScheduler } = require('jest');
const reverseString = require('../code/reverseString');

test("Reverse String Test", () => {
    expect(reverseString("mega")).toBe("agem");
});