const maxstache = require('maxstache')
const through = require('through2')
const assert = require('assert')

module.exports = maxstacheStream

// Maxstache transform stream
// obj? -> null
function maxstacheStream (args) {
  args = args || {}
  assert.equal(typeof args, 'object')

  return through(function (chunk, enc, cb) {
    const str = String(chunk)
    cb(null, maxstache(str, args))
  })
}
