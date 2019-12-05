/*
 * @Author: Blue 
 * @Date: 2019-07-10 15:06:11 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-05 11:28:35
 */

const express = require('express');
const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const process = require('process');
const portFinder = require('portfinder');
const app = express();
const upload = require('./upload');

let defalutPort;
async function checkNetWorkPort() {
  defalutPort = await portFinder.getPortPromise({
    port: 8080,
    stopPort: 9000
  });
};

const headerOption = function (res, path, stat) {
  res.set('Access-Control-Allow-Origin', '*')
};

let staticPath = JSON.parse(process.env.npm_config_argv).remain[0] ? JSON.parse(process.env.npm_config_argv).remain[0] : './';

checkNetWorkPort().then(function () {
  app.use('/', express.static(staticPath, { setHeaders: headerOption }));
  app.listen(defalutPort);
  console.log(chalk['green'](`\n  http://127.0.0.1:${defalutPort} / path:${staticPath} \n`));
})
  .catch(e => {
    console.log(e);
  });


