const grade = require('./grade');

test('Nilai 95 menghasilkan A', () => {
  // Arrange
  const nilai = 95;

  // Act
  const result = grade(nilai);

  // Assert
  expect(result).toBe('A');
});

test('nilai 95 bukan B', () => {
  // Arrange
  const nilai = 95;

  // Act
  const result = grade(nilai);

  // Assert
  expect(result).not.toBe('B');
});

test('nilai kurang dari 70 grade D', () => {
  // Arrange
  const nilai = 50;

  // Act
  const result = grade(nilai);

  // Assert
  expect(result).toBe('D');
});