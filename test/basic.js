/* global Blob */

const toBuffer = require('../')
const test = require('tape')

const blob = new Blob([new Uint8Array([1, 2, 3])], { type: 'application/octet-binary' })

test('Basic tests', function (t) {
  toBuffer(blob, function (err, buffer) {
    if (err) throw err
    t.deepEqual(buffer, Buffer.from([1, 2, 3]))
    t.end()
  })
})

test('Callback error on invalid arguments', function (t) {
  t.throws(function () {
    toBuffer({ blah: 1 }, function () {})
  })
  t.throws(function () {
    toBuffer(blob)
  })
  t.end()
})
