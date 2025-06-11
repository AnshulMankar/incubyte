// src/utils/stringCalculator.test.js
import add from './stringCalculator';

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single input', () => {
  expect(add("1")).toBe(1);
});

test('returns sum for two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum for multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('handles newlines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('handles custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});
