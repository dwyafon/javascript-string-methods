const { exportAllDeclaration } = require('@babel/types')
const functions = require('./functions')

test('should return the character at the given index', () => {
  expect(functions.stringCharAt('hjahsdkhasjdlkjahslkdjhaskjdh', 6)).toEqual('k')
})
