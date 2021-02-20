const functions = {
  stringCharAt: (string, index) => string.charAt(index),
  stringCharCodeAt: (string, index) => string.charCodeAt(index),
  stringCodePointAt: (string) => string.codePointAt(0),
  stringConcat: (string1, string2, string3) =>
    string1.concat(' ', string2, ' ', string3),
  stringEndsWith: (string, searchString, length) => string.endsWith(searchString, length),
  stringFromCharCode: (input) => String.fromCharCode(input),
  stringFromCodePoint: (input) => String.fromCodePoint(input),
  stringIncludes: (string1, string2) => string1.includes(string2),
  stringIndexOf: (string, substr) => string.indexOf(substr),
  stringLastIndexOf: (string, substr) => string.lastIndexOf(substr),
}

module.exports = functions
