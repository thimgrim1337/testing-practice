const analyzeArray = (arr) => {
  return {
    averange: arr.reduce((prev, curr) => prev + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyzeArray;
