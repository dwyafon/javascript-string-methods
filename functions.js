const functions = {
  stringCharAt: (string, index) => string.charAt(index),
  stringCharCodeAt: (string, index) => string.charCodeAt(index),
  stringCodePointAt: (string) => string.codePointAt(0),
  stringConcat: (string1, string2, string3) =>
    string1.concat(' ', string2, ' ', string3),
}

module.exports = functions
