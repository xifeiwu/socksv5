var socks = require('../');

var client = socks.connect({
  // host: 'baidu.com',
  host: 'nodejs.cn',
  port: 80,
  proxyHost: '127.0.0.1',
  proxyPort: 2080,
  // auths: [ socks.auth.None() ],
  auths: [ socks.auth.UserPassword('wxf', 'wxf') ],
}, function(socket) {
  console.log('>> Connection successful');
  socket.write('GET /node.js/rules HTTP/1.0\r\n\r\n');
  socket.pipe(process.stdout);
});
