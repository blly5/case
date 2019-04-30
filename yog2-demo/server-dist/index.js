"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const list_1 = require("./controllers/list");
let BL_Err = (str) => {
    console.log(chalk_1.default.red(str) + chalk_1.default.red('!'));
};
let app = express_1.default();
//列表查询
app.get('/', list_1.seachList);
app.get('/add', (req, res) => {
});
app.listen(3000);
