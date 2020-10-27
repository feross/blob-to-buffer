/* global Response, Buffer */

module.exports = anything => new Response(anything).arrayBuffer().then(Buffer.from)
