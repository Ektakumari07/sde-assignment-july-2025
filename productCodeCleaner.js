// productCodeCleaner.js

function processData(data) {
  let validCodes = [];

  for (let code of data) {
    if (isValidCode(code)) {
      validCodes.push(code.toUpperCase());
    }
  }

  validCodes.sort(); // Sort alphabetically

  return {
    totalCodes: data.length,
    validCodes: validCodes.length,
    invalidCodes: data.length - validCodes.length,
    normalizedValidCodes: validCodes
  };
}

function isValidCode(code) {
  if (code.length !== 7) return false;

  // Check first 3 characters are letters
  for (let i = 0; i < 3; i++) {
    let char = code[i].toLowerCase();
    if (char < 'a' || char > 'z') return false;
  }

  // Check last 4 characters are digits
  for (let i = 3; i < 7; i++) {
    let digit = code[i];
    if (digit < '0' || digit > '9') return false;
  }

  return true;
}

module.exports = { processData };
