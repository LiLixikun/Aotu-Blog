"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.github = exports.security = exports.database = void 0;
let host = "localhost"; // 生产服务器

if (process.env.NODE_ENV === "production") {
  host = "47.98.161.153";
}

const database = {
  dbname: 'island',
  host,
  port: 3306,
  username: 'root',
  password: 'root'
};
exports.database = database;
const security = {
  secretKey: 'xikun',
  expiresIn: 60 * 60
};
exports.security = security;
const github = {
  oauthPath: 'https://github.com/login/oauth/authorize?client_id=Iv1.34beee48ab7aa500',
  appId: 61245,
  clientID: 'Iv1.34beee48ab7aa500',
  clientSecret: '55ce5b879bcecb00f701524322ef7cbb13101f8b',
  getAccessToken: 'https://github.com/login/oauth/access_token',
  getUserInfo: 'https://api.github.com/user?access_token='
};
exports.github = github;