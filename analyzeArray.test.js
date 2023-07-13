import analyzeArray from './analyzeArray';

test('return an object with averange property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).averange).toBe(4);
});

test('return an object with min property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('return an object with max property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('return an object with length property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
