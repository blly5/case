"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = __importDefault(require("../config/db_config"));
const chalk_1 = __importDefault(require("chalk"));
const moment_1 = __importDefault(require("moment"));
const uuid = require('uuid');
mongoose_1.default.connect(db_config_1.default.url, { useNewUrlParser: true });
const con = mongoose_1.default.connection;
con.on('error', () => {
    console.log(chalk_1.default.red('链接失败'));
});
con.once('open', () => {
    console.log(chalk_1.default.blue('链接成功'));
});
;
//创建schema 需要转换成model document需要是复数的形式
//子文档
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
//团队和成员分散
//由schema创建model实例
const albumModel = mongoose_1.default.model('activitys', schema);
async function findByList(id) {
    return albumModel.find({ 'uid': id }, 'name team age uid -_id', function (err, res) {
        return res;
    });
}
exports.findByList = findByList;
;
async function addAlbumInfo(name, team, age, exstr) {
    let data = {
        name: name,
        team: team,
        age: age,
        update: moment_1.default().format("YYYYMMDDHHmmss"),
        uid: uuid.v1(),
        exstr: exstr
    };
    return albumModel.create(data, function (err, res) {
        if (err)
            return { msg: '添加失败' };
        return res;
    });
}
exports.addAlbumInfo = addAlbumInfo;
;
async function setAlbumInfo(id, team, age, exstr) {
}
exports.setAlbumInfo = setAlbumInfo;
