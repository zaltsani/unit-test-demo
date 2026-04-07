const sumArray = require('./sum-array');

test('sum of array [1, 2, 3] = 6', () => {
  // Arrange
  const array = [1, 2, 3];

  // Act
  const result = sumArray(array);
  console.log('Sum of array', array, '=', result);

  // Assert
  expect(result).toBe(6);
});


test('sum of array', () => {
  // Arrange
  const array = [10, 15, 20, 25, 30, 35, 40, 45, 50];

  // Act
  const result = sumArray(array);
  console.log('Sum of array', array, '=', result);

  // Assert
  expect(typeof result).toBe('number');
});