import reverseString from './reverseString';

test('return reversed string', () => {
  expect(reverseString('Dawid')).toBe('diwaD');
});

test('return reversed string from multiword string', () => {
  expect(reverseString('Dawid to mistrz')).toBe('zrtsim ot diwaD');
});
