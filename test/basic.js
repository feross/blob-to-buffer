var toBuffer = require('../')
var test = require('tape')

test('Basic tests', function (t) {
  var blob = new Blob([ new Uint8Array([1, 2, 3]) ], { type: 'application/octet-binary' })

  toBuffer(blob, function (err, buffer) {
    if (err) throw err
    t.equal(buffer[0], 1)
    t.equal(buffer[1], 2)
    t.equal(buffer[2], 3)
    t.end()
  })
})


test('Callback error on invalid blob', function (t) {
  toBuffer({ blah: 1 }, function (err, buffer) {
    t.ok(err)
    t.ok(!buffer)
    t.end()
  })
})
