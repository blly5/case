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
//创建schema 需要转换成model document需要是复数的形式
const schema = new mongoose_1.default.Schema({
    name: String,
}, { _id: false });
const schemaList = mongoose_1.default.model('activitys', schema);
async function findByList(id) {
    try {
        let res = await schemaList.find();
        return res;
    }
    catch (e) {
        console.log(chalk_1.default.red(e));
        return { msg: 'error' };
    }
}
exports.findByList = findByList;
async function addAlbumInfo(val) {
    let res = await schemaList.insertMany([{ 'name': val }]);
    return res;
}
exports.addAlbumInfo = addAlbumInfo;
