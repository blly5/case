"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = __importDefault(require("../config/db_config"));
mongoose_1.default.connect(db_config_1.default.url, { useNewUrlParser: true });
const con = mongoose_1.default.connection;
con.on('error', () => {
    console.log(`链接失败`);
});
con.once('open', () => {
    console.log('链接成功');
});
const schema = new mongoose_1.default.Schema({
    name: String
});
let goods = mongoose_1.default.model('mongoTest', schema);
exports.seachList = async (req, res) => {
    const seach = await goods.find({});
    res.send(seach);
};
