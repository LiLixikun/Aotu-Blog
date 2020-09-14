"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awilixKoa = require("awilix-koa");

var _httpException = require("../core/httpException");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let TagController = (_dec = (0, _awilixKoa.route)('/api/tag'), _dec2 = (0, _awilixKoa.route)('/list'), _dec3 = (0, _awilixKoa.POST)(), _dec4 = (0, _awilixKoa.route)('/create'), _dec5 = (0, _awilixKoa.POST)(), _dec6 = (0, _awilixKoa.route)('/update'), _dec7 = (0, _awilixKoa.PUT)(), _dec(_class = (_class2 = class TagController {
  constructor({
    tagService
  }) {
    this.tagService = tagService;
  }

  async actionIndex(ctx) {
    // 此处需要判断，暂不处理(业务逻辑处理完成后所有的前端传递的参数都需要做验证处理)
    const postData = ctx.request.body;
    const data = await this.tagService.getData(postData); // console.log(data)

    throw new _httpException.Success(data, '加载成功');
  }

  async actionCreate(ctx) {
    // console.log(ctx.req)
    await this.tagService.create();
    throw new _httpException.Success('创建成功', '加载成功');
  }

  async actionUpdate(ctx) {
    throw new _httpException.Success('更新成功');
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "actionIndex", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "actionIndex"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionCreate", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "actionCreate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionUpdate", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "actionUpdate"), _class2.prototype)), _class2)) || _class);
var _default = TagController;
exports.default = _default;