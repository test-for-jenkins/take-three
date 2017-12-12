const add = require('./index')

test('add two number', () => {
  expect(add(2, 4)).toEqual(6)
})
