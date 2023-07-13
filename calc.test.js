import calc from './calc';

test('object calc sum function', () => {
  expect(calc.sum(1, 2)).toBe(3);
});

test('object calc subtract function', () => {
  expect(calc.subtract(2, 1)).toBe(1);
});

test('object calc subtract function', () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});

test('object calc subtract function', () => {
  expect(calc.subtract(0, 0)).toBe(0);
});

test('object calc multiply function', () => {
  expect(calc.multiply(2, 2)).toBe(4);
});

test('object calc multiply by 0', () => {
  expect(calc.multiply(2, 0)).toBe(0);
});

test('object calc multiply by -2', () => {
  expect(calc.multiply(2, -2)).toBe(-4);
});

test('object calc divide function', () => {
  expect(calc.divide(2, 2)).toBe(1);
});

test('object calc divide function ', () => {
  expect(calc.divide(1, 2)).toBe(0.5);
});

test('object calc divide function by 0 ', () => {
  expect(calc.divide(1, 0)).toBe(undefined);
});
