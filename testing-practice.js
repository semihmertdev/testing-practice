// capitalize function
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// reverseString function
function reverseString(string) {
  return string.split('').reverse().join('');
}

// calculator object with basic arithmetic operations
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// caesarCipher function
function caesarCipher(str, shift) {
  return str.split('').map(char => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode((charCode - 65 + shift) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode((charCode - 97 + shift) % 26 + 97);
      } else {
          return char;
      }
  }).join('');
}

// analyzeArray function
function analyzeArray(array) {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}

// Export each function individually
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};
