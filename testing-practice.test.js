const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} = require('./testing-practice');

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('javaScript')).toBe('JavaScript');
});

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
});

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(5, 7)).toBe(12);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(10, 7)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('divides two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(20, 4)).toBe(5);
});

test('shifts characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzes an array of numbers', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
  });
});
