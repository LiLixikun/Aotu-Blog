"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tag = _interopRequireDefault(require("../model/tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TagService {
  async getData(postData) {
    // const data = await Tag.findAll()
    const data = await _tag.default.findSearch(postData); // console.log(data)

    return data;
  }

  async create(data) {
    await _tag.default.create({
      'tagName': '1',
      'uid': '132we23423453532453425'
    });
  }

}

var _default = TagService;
exports.default = _default;