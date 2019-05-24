"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var db_config_1 = require("../config/db_config");
var chalk_1 = require("chalk");
mongoose_1["default"].connect(db_config_1["default"].url, { useNewUrlParser: true });
var con = mongoose_1["default"].connection;
con.on('error', function () {
    console.log(chalk_1["default"].red('链接失败'));
});
con.once('open', function () {
    console.log(chalk_1["default"].blue('链接成功'));
});
////////////////////////////////////
//团队和成员分散
//创建schema 需要转换成model document需要是复数的形式
//子文档 test
var childSchema = new mongoose_1["default"].Schema({
    setdate: Date
});
//基础的数据模型
var schema = new mongoose_1["default"].Schema({
    name: String,
    team: String,
    age: Number,
    update: Date,
    uid: String,
    exstr: String,
    child: childSchema
});
//由schema创建model实例
exports.albumModel = mongoose_1["default"].model('activitys', schema);
