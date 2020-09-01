"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../core/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: 席坤 
 * @Date: 2020-09-01 22:42:03 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-09-01 22:42:24
 */
class Tag extends _sequelize.Model {
  static async findHotTag() {
    const data = await _db.default.query("select * from `t_tag` ORDER BY click_count DESC limit 10", {
      type: _db.default.QueryTypes.SELECT
    });

    if (!!data) {
      return data;
    }
  }

  static async findByUid(uid) {
    const res = await Tag.findByPk(uid);
    return res;
  }

}

Tag.init({
  uid: {
    type: _sequelize.Sequelize.STRING(32),
    allowNull: false,
    primaryKey: true
  },
  tagName: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false
  },
  img: _sequelize.Sequelize.STRING,
  content: _sequelize.Sequelize.STRING(1000),
  clickCount: _sequelize.Sequelize.INTEGER,
  status: {
    type: _sequelize.Sequelize.BOOLEAN,
    defaultValuee: 1
  },
  sort: _sequelize.Sequelize.INTEGER
}, {
  createdAt: 'createTime',
  updatedAt: 'updateTime',
  underscored: true,
  tableName: 't_tag',
  comment: '标签表',
  sequelize: _db.default,
  freezeTableName: true
});
var _default = Tag;
exports.default = _default;