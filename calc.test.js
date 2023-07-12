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
