"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpException = require("../core/httpException.js");

/*
 * @Author: 席坤 
 * @Date: 2020-08-31 10:27:08 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 11:43:50
 */
const catchError = async (ctx, next) => {
  try {
    await next(); // 处理页面404 防止页面404过多 被搜索引擎降权

    if (ctx.status === 404) {
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    }
  } catch (error) {
    const isHttpException = error instanceof _httpException.HttpException; // 开发环境下输出 异常 error

    if (process.env.NODE_ENV === 'dev' && !isHttpException) {
      throw error;
    } //判断是否是已知错误


    if (isHttpException) {
      if (error.code === 200) {
        ctx.body = {
          code: error.code,
          data: error.data
        };
      } else {
        ctx.body = {
          msg: error.msg,
          errorCode: error.errorCode,
          request: `${ctx.method} ${ctx.path}`
        };
      }

      ctx.status = error.code;
    } else {
      ctx.body = {
        msg: '服务器出现了未知异常',
        errorCode: 999,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

var _default = catchError;
exports.default = _default;