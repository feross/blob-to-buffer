var toBuffer = require('typedarray-to-buffer')

module.exports = function blobToBuffer (blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob))
    throw new Error('first argument must be a Blob')
  if (typeof cb !== 'function')
    throw new Error('second argument must be a function')

  var reader = new FileReader()
  reader.addEventListener('load', function (e) {
    // uint8array -> buffer without copy
    var buffer = toBuffer(new Uint8Array(e.target.result))
    cb(null, buffer)
  })
  reader.addEventListener('error', cb)
  reader.readAsArrayBuffer(blob)
}
