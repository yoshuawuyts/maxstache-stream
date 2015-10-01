const minstache = require('minstache')
const through = require('through2')
const assert = require('assert')

module.exports = minstacheStream

// Minstache transform stream
// obj? -> null
function minstacheStream (args) {
  args = args || {}
  assert.equal(typeof args, 'object')

  return through(function (chunk, enc, cb) {
    const str = String(chunk)
    cb(null, minstache(str, args))
  })
}
