import caesarCipher from './caesarCipher';

test('to return correctly ciphered text', () => {
  expect(caesarCipher('defend the east wall of the castle', 5)).toBe(
    'ijkjsi ymj jfxy bfqq tk ymj hfxyqj'
  );
});

test('wrapping from z to a', () => {
  expect(caesarCipher('a', 5)).toBe('f');
});

test('keeping the same case', () => {
  expect(caesarCipher('Defend the east wall of the castle', 5)).toBe(
    'Ijkjsi ymj jfxy bfqq tk ymj hfxyqj'
  );
});

test('punctuation', () => {
  expect(caesarCipher('Hello, how are you?', 5)).toBe("Mjqqt' mtb fwj dtz%");
});

test('to return correctly deciphered text', () => {
  expect(caesarCipher('ijkjsi ymj jfxy bfqq tk ymj hfxyqj', -5)).toBe(
    'defend the east wall of the castle'
  );
});

test('wrapping from z to a (decrypt)', () => {
  expect(caesarCipher('e', -5)).toBe('z');
});

test('punctuation (decrypt)', () => {
  expect(caesarCipher("Mjqqt' mtb fwj dtz%", -5)).toBe('Hello, how are you?');
});
