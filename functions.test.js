const { exportAllDeclaration } = require('@babel/types')
const functions = require('./functions')

test('should return the character at the given index', () => {
  expect(functions.stringCharAt('hjahsdkhasjdlkjahslkdjhaskjdh', 6)).toEqual(
    'k'
  )
})

test('should return an integer that represents the UTF-16 code unit for the character at the given index of the string', () => {
  expect(
    functions.stringCharCodeAt('lkjsdlfjsljdlkfjljwkljl;kj;lkj', 18)
  ).toEqual(119)
})

test('should return the UTF-16 code point for the passed string', () => {
  expect(functions.stringCodePointAt('Ø')).toEqual(216)
})

test('should return a string consisting of concated strings', () => {
  expect(functions.stringConcat('I', 'love', 'you')).toEqual('I love you')
})

test('should return true or false given a string, a search string, and an optional length value', () => {
  expect(functions.stringEndsWith('peanutbutterjellytime', 'jelly', 17)).toEqual(true)
})

test('should return a string based on the given UTF-16 code unit', () => {
  expect(functions.stringFromCharCode(216)).toEqual('Ø')
})

test('returns a string based on the given code point', () => {
  expect(functions.stringFromCodePoint(216)).toEqual('Ø')
})