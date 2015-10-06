const fromString = require('from2-string')
const concat = require('concat-stream')
const test = require('tape')

const maxstache = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(maxstache.bind(null, 'foo'))
})

test('should transform a bunch of text', function (t) {
  t.plan(1)
  const template = [
    'hello {{name}}',
    'how is your {{person}}'
  ].join('\n')

  fromString(template)
    .pipe(maxstache({ name: 'foo', person: 'bar' }))
    .pipe(concat(sink))

  function sink (str) {
    str = String(str)
    const comp = [
      'hello foo',
      'how is your bar'
    ].join('\n')
    t.equal(str, comp)
  }
})

test('should pipe through a bunch of text', function (t) {
  t.plan(1)
  const template = [
    'hello beep',
    'how is your boop'
  ].join('\n')

  fromString(template)
    .pipe(maxstache())
    .pipe(concat(sink))

  function sink (str) {
    str = String(str)
    const comp = [
      'hello beep',
      'how is your boop'
    ].join('\n')
    t.equal(str, comp)
  }
})
