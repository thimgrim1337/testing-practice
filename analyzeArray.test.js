import analyzeArray from './analyzeArray';

test('return an object with averange property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).averange).toBe(4);
});
