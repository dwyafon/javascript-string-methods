const { exportAllDeclaration } = require('@babel/types')
const functions = require('./functions')

test('should return the character at the given index', () => {
  expect(functions.stringCharAt('hjahsdkhasjdlkjahslkdjhaskjdh', 6)).toEqual('k')
})

test('should return an integer that represents the UTF-16 code unit for the character at the given index of the string', () => {
  expect(functions.stringCharCodeAt('lkjsdlfjsljdlkfjljwkljl;kj;lkj', 18)).toEqual(119)
})

test('should return the UTF-16 code point for the passed string', () => {
  expect(functions.stringCodePointAt('Ø')).toEqual(216)
})
