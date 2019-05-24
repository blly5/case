"use strict";
/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:08:39
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const execa = require('execa');
const readline = require('readline');
let { getContent } = require('./lib/getContent');
getContent();
async function getMessage() {
    return new Promise((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        let msg = '';
        console.log(chalk.blue('请输入:'));
        rl.on('line', (input) => {
            msg = input;
            rl.close();
            resolve(msg);
        });
    });
}
;
async function setContent(i) {
    return await fs.writeFileSync(`${path.resolve('./')}/index.json`, i);
}
;
async function addContent(i) {
    try {
        let content = JSON.parse(await getContent());
        let inputMsg = await getMessage();
        let w = Object.assign({}, content, { inputMsg });
        await setContent(JSON.stringify(content));
    }
    catch (e) {
        console.log(chalk.red(e));
    }
}
;
// addContent();
