/* global Blob */

const toBuffer = require('../')
const test = require('tape')

const blob = new Blob([new Uint8Array([1, 2, 3])])

test('Basic tests', function (t) {
  toBuffer(blob).then(buffer => {
    t.deepEqual(buffer, Buffer.from([1, 2, 3]))
    t.end()
  })
})
