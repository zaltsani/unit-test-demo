function factorial(value) {
  if (typeof value !== 'number') {
    throw new Error('value is not a number');
  };

  if (typeof value < 1) {
    throw new Error('value less than 1');
  };

  let result = 1;
  for (let i = value; i >= 1; i -= 1) {
    result = result * i;
  };

  return result;
};

module.exports = factorial;