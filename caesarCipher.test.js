import caesarCipher from './caesarCipher';

test('to return correctly ciphered text', () => {
  expect(caesarCipher('defend the east wall of the castle')).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('wrapping from z to a', () => {
  expect(caesarCipher('z')).toBe('a');
});

test('keeping the same case', () => {
  expect(caesarCipher('Defend the east wall of the castle')).toBe(
    'Efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});
