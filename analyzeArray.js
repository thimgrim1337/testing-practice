const analyzeArray = (arr) => {
  return {
    averange: arr.reduce((prev, curr) => prev + curr) / arr.length,
  };
};

export default analyzeArray;
