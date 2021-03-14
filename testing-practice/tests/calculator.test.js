const calculator = require('../code/calculator') 

test("ADD Test", () => {
  expect(calculator.add(23, 43)).toBe(66);
});

test("Substract Test", () => {
  expect(calculator.sub(53, 32)).toBe(21);
});

test("Multiply Test", () => {
  expect(calculator.multiply(23, 2)).toBe(46);
});

test("Divide Test", () => {
  expect(calculator.divide(33, 11)).toBe(3);
});

test("Divide Test 0 ", ()=> {
    expect(calculator.divide(22,0)).toBeNull();
});
