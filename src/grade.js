function grade(value) {
  if (typeof value === 'number') {
    if (value >= 90) return 'A';
    if (value >= 80) return 'B';
    if (value >= 70) return 'C';
    else return 'D'
  };
};

module.exports = grade;