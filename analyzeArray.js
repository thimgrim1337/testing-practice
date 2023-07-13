const analyzeArray = (arr) => {
  return {
    averange: arr.reduce((prev, curr) => prev + curr) / arr.length,
    min: Math.min(...arr),
  };
};

export default analyzeArray;
