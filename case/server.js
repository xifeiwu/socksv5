var socks = require('../');

const socksServer = socks.createServer({
  // auths: [socks.auth.None()]

  // auths列表中的顺序代表验证偏好
  // auths: [socks.auth.UserPassword('wxf', 'wxf'), socks.auth.None()]

  // 只接受用户名/密码认证
  auths: [socks.auth.UserPassword((username, password, cb) => {
    // console.log(username, password);
    // console.log(username == 'wxf' && password == 'wxf');
    cb(username == 'wxf' && password == 'wxf');
  })]
}).listen(2080);

socksServer.on('connection', (reqInfo, accept, deny) => {
  console.log(`${reqInfo.dstAddr}:${reqInfo.dstPort}`);
  accept();
})
