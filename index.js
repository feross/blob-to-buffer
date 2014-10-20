var toBuffer = require('typedarray-to-buffer')

module.exports = function blobToBuffer (blob, cb) {
  var reader = new FileReader()
  reader.addEventListener('load', function (e) {
    // uint8array -> buffer without copy
    var buffer = toBuffer(new Uint8Array(e.target.result))
    cb(null, buffer)
  })
  reader.addEventListener('error', cb)

  try {
    reader.readAsArrayBuffer(blob)
  } catch (err) {
    cb(err)
  }
}
