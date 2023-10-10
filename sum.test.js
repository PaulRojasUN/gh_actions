const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(4, 2)).toBe(6);
  expect(sum(3, 7)).toBe(10);
  expect(sum(3, 4)).toBe(8);
});
