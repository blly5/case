"use strict";
/*
 * @Author: Blue
 * @Date: 2019-05-24 14:48:42
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:09:17
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
async function getContent() {
    try {
        return await fs.readFileSync(`./Guide.json`);
    }
    catch (e) {
        console.log(chalk.red(e));
    }
}
exports.getContent = getContent;
