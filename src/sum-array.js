function sumArray(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  };

  let result = 0;

  array.map(val => {
    result += val;
  });

  return result;
};

module.exports = sumArray;