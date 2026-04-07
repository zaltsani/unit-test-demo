const factorial = require('./factorial');

test('factorial 3 = 6', () => {
  // Arrange
  const value = 3;

  // Act
  const result = factorial(value);

  // Assert
  expect(result).toBe(6);
});

test('factorial 10 = 3,628,800', () => {
  // Arrange
  const value = 10;

  // Act
  const result = factorial(value);

  // Assert
  expect(result).toBe(3_628_800);
});

test('throw if not a number', () => {
  // Arrange
  const stringVal = '2';
  const booleanVal = true;
  const objectVal = {
    a: 1,
  };
  const arrayVal = ['a', 'b', 'c'];

  // Act
  const stringResult = () => factorial(stringVal);
  const booleanResult = () => factorial(booleanVal);
  const objectResult = () => factorial(objectVal);
  const arrayResult = () => factorial(arrayVal);

  // Assert
  expect(stringResult).toThrow();
  expect(booleanResult).toThrow();
  expect(objectResult).toThrow();
  expect(arrayResult).toThrow();
});

test('factorial 20 = 2,432,902,008,176,640,000', () => {
  // Arrange
  const value = 20;

  // Act
  const result = factorial(value);
  console.log("20! =", result);

  // Assert
  expect(result).toBe(2_432_902_008_176_640_000);
}); 