var toBuffer = require('typedarray-to-buffer')

module.exports = function blobToBuffer (blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob))
    return cb(new Error('not a blob'))

  var reader = new FileReader()
  reader.addEventListener('load', function (e) {
    // uint8array -> buffer without copy
    var buffer = toBuffer(new Uint8Array(e.target.result))
    cb(null, buffer)
  })
  reader.addEventListener('error', cb)
  reader.readAsArrayBuffer(blob)
}
