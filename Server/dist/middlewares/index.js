"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMiddlewares;

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _path = _interopRequireDefault(require("path"));

var _exception = _interopRequireDefault(require("./exception"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useMiddlewares(app) {
  // 错误中间件在最前面
  app.use(_exception.default); // 加载服务器静态资源

  app.use((0, _koaStatic.default)(_path.default.join(__dirname, './static')));
  app.use((0, _koaBodyparser.default)());
}