"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const selectUsers_1 = require("./controllers/selectUsers");
const notifier = require('node-notifier');
let app = express_1.default();
/**
 * @param {String} str;
 **/
let selectUserInfo = (req, res, next) => {
    console.log(`done`);
    next();
};
app.use('/api', selectUsers_1.selectUsers);
//列表查询
app.get('/add', (req, res) => {
});
app.listen(3000);
