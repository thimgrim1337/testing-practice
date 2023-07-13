const caesarCipher = (text, shift) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const punctuation = ',./;:\'"{[}}\\|?!@#$%^&*()-_=+'.split('');
  const ciphered = [];

  [...text].forEach((char) => {
    let currentIndex = chars.includes(char.toLowerCase())
      ? chars.indexOf(char.toLowerCase())
      : punctuation.includes(char)
      ? punctuation.indexOf(char)
      : -1;

    let shiftedIndex =
      currentIndex + shift > chars.length
        ? currentIndex + shift - chars.length
        : currentIndex + shift;

    chars.includes(char.toLowerCase())
      ? char === char.toUpperCase()
        ? ciphered.push(chars.at(shiftedIndex).toUpperCase())
        : ciphered.push(chars.at(shiftedIndex))
      : punctuation.includes(char)
      ? ciphered.push(punctuation.at(shiftedIndex))
      : ciphered.push(' ');
  });

  return ciphered.join('');
};

export default caesarCipher;
