/* global Blob, FileReader */

// arraybuffer -> buffer without copy
var toBuffer = require('typedarray-to-buffer')

module.exports = function blobToBuffer (blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob')
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function')
  }

  var reader = new FileReader()

  function onLoad (e) {
    unregisterEvents()
    cb(null, toBuffer(e.target.result))
  }

  function onError (err) {
    unregisterEvents()
    cb(err)
  }

  function unregisterEvents () {
    reader.removeEventListener('load', onLoad)
    reader.removeEventListener('error', onError)
  }

  reader.addEventListener('load', onLoad)
  reader.addEventListener('error', onError)
  reader.readAsArrayBuffer(blob)
}
