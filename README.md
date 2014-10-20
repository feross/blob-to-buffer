# blob-to-buffer [![travis](https://img.shields.io/travis/feross/blob-to-buffer.svg)](https://travis-ci.org/feross/blob-to-buffer) [![npm](https://img.shields.io/npm/v/blob-to-buffer.svg)](https://npmjs.org/package/blob-to-buffer) [![downloads](https://img.shields.io/npm/dm/blob-to-buffer.svg)](https://npmjs.org/package/blob-to-buffer) [![gittip](https://img.shields.io/gittip/feross.svg)](https://www.gittip.com/feross/)

#### Convert a Blob to a [Buffer](https://github.com/feross/buffer).

[![browser support](https://ci.testling.com/feross/blob-to-buffer.png)](https://ci.testling.com/feross/blob-to-buffer)

Say you're using the ['buffer'](https://github.com/feross/buffer) module on npm, or
[browserify](http://browserify.org/) and you're working with lots of binary data.

Unfortunately, sometimes the browser or someone else's API gives you a `Blob`. Silly
browser. How do you convert it to a`Buffer`? What's that goofy `FileReader` code look
like? Time to Google for it yet again... There must be a better way!

***There is! Simply use this module!***

Works in the browser. This module is used by [WebTorrent](http://webtorrent.io)!

### install

```
npm install blob-to-buffer
```

### usage

```js
var toBuffer = require('blob-to-buffer')

// Get a Blob somehow...
var blob = new Blob([ new Uint8Array([1, 2, 3]) ], { type: 'application/octet-binary' })

var buffer = toBuffer(blob)

buffer[0] // => 1
buffer.readUInt8(1) // => 2
```

### license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
