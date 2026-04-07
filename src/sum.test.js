const sum = require("./sum");

test('Add 2 + 3 = 5', () => {
  // Arramge
  const a = 2;
  const b = 3;

  // Act
  const result = sum(a, b);

  // Assert
  expect(result).toBe(5);
});

test('Add string + number', () => {
  // Arrange
  const a = '2';
  const b = 3;

  // Act
  const result = () => {
    sum(a, b);
  };

  // Assert
  expect(result).toThrow();
});

test('2 + 3 != 6', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = sum(a, b);

  // Assert
  expect(result).not.toBe(6);
});