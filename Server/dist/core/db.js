"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _config = require("../config");

const {
  dbname,
  host,
  port,
  username,
  password
} = _config.database;
const sequelize = new _sequelize.Sequelize(dbname, username, password, {
  host,
  port,
  dialect: "mysql",
  define: {
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  },
  // 注意: `force: true` 选项会在表存在时首先删除表 相当于初始化
  sync: {
    force: false
  },
  // 时区转换
  timezone: '+08:00',
  // 选择一种日志记录参数
  logging: console.log // 默认值,显示日志函数调用的第一个参数

});

try {
  sequelize.authenticate();
  console.log('数据库连接成功 😊');
} catch (error) {
  console.error('数据库链接失败 💩', error);
}

var _default = sequelize; // 全部属性
// https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor 

exports.default = _default;