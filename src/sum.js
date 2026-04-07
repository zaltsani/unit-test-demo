const sum = (a, b) => {
  if (
    typeof a === 'number' &&
    typeof b === 'number'
  ) {
    return a + b;
  };

  throw new Error('a or b is not a number');
};

module.exports = sum;