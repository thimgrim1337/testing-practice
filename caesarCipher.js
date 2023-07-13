const caesarCipher = (text) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const punctuation = ',./;:\'"{[}}\\|?!@#$%^&*()-_=+'.split('');
  const ciphered = [];

  [...text].forEach((char) => {
    let index = chars.includes(char.toLowerCase())
      ? chars.indexOf(char.toLowerCase())
      : punctuation.includes(char)
      ? punctuation.indexOf(char)
      : -1;

    chars.includes(char.toLowerCase())
      ? index === 25
        ? ciphered.push(chars[0])
        : char === char.toUpperCase()
        ? ciphered.push(chars[index + 1].toUpperCase())
        : ciphered.push(chars[index + 1])
      : punctuation.includes(char)
      ? ciphered.push(punctuation[index + 1])
      : ciphered.push(' ');
  });

  return ciphered.join('');
};

export default caesarCipher;
