import capitalize from './capitalize';

test('return capitalize string', () => {
  expect(capitalize('dawid')).toBe('Dawid');
});

test('return capitalize string from capitalized string', () => {
  expect(capitalize('Dawid')).toBe('Dawid');
});

test('return capitalize string from uppercased string', () => {
  expect(capitalize('DAWID')).toBe('Dawid');
});

test('return capitalize string with lowercased 1st char', () => {
  expect(capitalize('dAWID')).toBe('Dawid');
});

test('return capitalize string from multiword string', () => {
  expect(capitalize('dAWID is master')).toBe('Dawid is master');
});
