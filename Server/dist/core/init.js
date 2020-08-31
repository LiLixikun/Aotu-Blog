"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initContainer;

var _awilix = require("awilix");

var _awilixKoa = require("awilix-koa");

/*
 * @Author: 席坤 
 * @Date: 2020-08-31 11:34:08 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 13:46:23
 */
function initContainer(app) {
  // 创建容器
  const container = (0, _awilix.createContainer)(); // 自动注册 services

  container.loadModules([`${process.cwd()}/src/services/*.js`], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: _awilix.Lifetime.SCOPED
    }
  }); // 注入

  app.use((0, _awilixKoa.scopePerRequest)(container)); // 加载路由

  app.use((0, _awilixKoa.loadControllers)(`${process.cwd()}/src/controllers/*.js`));
}