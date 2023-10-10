const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(4, 2)).toBe(6);
});
