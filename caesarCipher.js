const caesarCipher = (text) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const ciphered = [];

  [...text].forEach((char) => {
    chars.indexOf(char) === -1
      ? ciphered.push(' ')
      : ciphered.push(chars[chars.indexOf(char) + 1]);
  });

  return ciphered.join('');
};

export default caesarCipher;
