const caesarCipher = (text) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const ciphered = [];

  [...text].forEach((char) => {
    let index = chars.indexOf(char.toLowerCase());
    index === 25
      ? ciphered.push(chars[0])
      : index === -1
      ? ciphered.push(' ')
      : char === char.toUpperCase()
      ? ciphered.push(chars[index + 1].toUpperCase())
      : ciphered.push(chars[index + 1]);
  });

  return ciphered.join('');
};

export default caesarCipher;
