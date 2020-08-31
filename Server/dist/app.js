"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _httpException = require("./core/httpException");

var _middlewares = _interopRequireDefault(require("./middlewares"));

var _init = _interopRequireDefault(require("./core/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: 席坤 
 * @Date: 2020-08-31 10:25:29 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 13:04:19
 */
const app = new _koa.default();
(0, _middlewares.default)(app);
(0, _init.default)(app);
app.use(ctx => {
  throw new _httpException.Success('Hello Koa', "fff");
});
app.listen("8088", () => {
  console.log("启动在8088 🍺");
});