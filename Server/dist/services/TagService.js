"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tag = _interopRequireDefault(require("../model/tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TagService {
  async getData() {
    const data = await _tag.default.findAll();
    return data;
  }

}

var _default = TagService;
exports.default = _default;