"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  database: {
    dbName: 'island',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'llxk930617'
  },
  // jwt 加密私钥
  security: {
    secretKey: 'xikun',
    expiresIn: 60 * 60
  },
  github: {
    oauthPath: 'https://github.com/login/oauth/authorize?client_id=Iv1.34beee48ab7aa500',
    appId: 61245,
    clientID: 'Iv1.34beee48ab7aa500',
    clientSecret: '55ce5b879bcecb00f701524322ef7cbb13101f8b',
    getAccessToken: 'https://github.com/login/oauth/access_token',
    getUserInfo: 'https://api.github.com/user?access_token='
  },
  xw: {}
};
exports.default = _default;