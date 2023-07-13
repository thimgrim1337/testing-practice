import caesarCipher from './caesarCipher';

test('to return correctly ciphered text', () => {
  expect(caesarCipher('defend the east wall of the castle')).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('to return correctly ciphered text with different case', () => {
  expect(caesarCipher('Defend the east wall of the castle')).toBe(
    'Efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});
