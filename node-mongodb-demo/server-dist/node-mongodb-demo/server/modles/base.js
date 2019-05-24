"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = __importDefault(require("../config/db_config"));
const chalk_1 = __importDefault(require("chalk"));
mongoose_1.default.connect(db_config_1.default.url, { useNewUrlParser: true });
const con = mongoose_1.default.connection;
con.on('error', () => {
    console.log(chalk_1.default.red('链接失败'));
});
con.once('open', () => {
    console.log(chalk_1.default.blue('链接成功'));
});
////////////////////////////////////
//团队和成员分散
//创建schema 需要转换成model document需要是复数的形式
//子文档 test
const childSchema = new mongoose_1.default.Schema({
    setdate: Date
});
//基础的数据模型
const schema = new mongoose_1.default.Schema({
    name: String,
    team: String,
    age: Number,
    update: Date,
    uid: String,
    exstr: String,
    child: childSchema
});
//由schema创建model实例
exports.albumModel = mongoose_1.default.model('activitys', schema);
