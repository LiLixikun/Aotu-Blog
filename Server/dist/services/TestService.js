"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _test = _interopRequireDefault(require("../model/test"));

var _db = _interopRequireDefault(require("../core/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TagService {
  // 自定义使用原生sql
  async customQuery() {
    const data = await _db.default.query("select * from `t_tag` ORDER BY click_count DESC limit 10", {
      type: _db.default.QueryTypes.SELECT
    });
  }

  async getData() {
    const data = await _test.default.findAll(); // 使用嵌套数组来重命名属性：
    // findAll({
    //     attributes: ['foo', ['bar', 'baz'], 'qux']
    // });
    // 排除某些属性：
    // attributes: { exclude: ['baz'] }
    // 添加 where 字句
    // findAll({
    //     where: {
    //         authorId: 2
    //     }
    // });
    // Or 操作符
    // where: {
    //     [Op.or]: [
    //         { authorId: 12 },
    //         { authorId: 13 }
    //     ]
    // }

    _test.default.findAll({});

    return data;
  } // 分页
  // offset 页码   limit 每页个数
  // count 符合查询条件的记录总数
  // 一个数组对象


  async findAndCountAll() {
    const {
      count,
      rows
    } = await _test.default.findAndCountAll({
      where: {
        title: {
          [_sequelize.Op.like]: 'foo%'
        }
      },
      offset: 5,
      limit: 5
    });
  } // 查询单个


  async findOne(id) {
    await _test.default.findOne({
      where: {
        id
      }
    });
  } // 根据主键查找


  async findByPk(id) {
    await _test.default.findByPk(id);
  } // 创建单个


  async createData(data) {
    await _test.default.create(data);
  } // 批量创建
  // [{name:xx,age:20},{name:张三,age:12}]


  async bulkCreate(datas) {
    await _test.default.bulkCreate(datas);
  }

  async updateData(data) {
    await _test.default.update(data, {
      where: {
        id: data.id
      }
    });
  }

  async delData(id) {
    await _test.default.destroy({
      where: {
        id
      }
    });
  } // 销毁所有内容


  async destroyData() {
    await _test.default.destroy({
      truncate: true
    });
  } // 获取 元素id大于25 的个数


  async getCount(id) {
    await _test.default.count({
      where: {
        id: {
          [_sequelize.Op.gt]: 25
        }
      }
    });
  }

}

var _default = TagService; // 更多查看
// https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-querying-basics.md

exports.default = _default;