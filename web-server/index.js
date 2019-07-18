/*
 * @Author: Blue 
 * @Date: 2019-07-10 15:06:11 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-18 11:42:40
 */

const express =         require('express');
const path =            require('path');
const chalk =           require('chalk');
const execa =           require('execa');
const process =         require('process');
const rqPort =          require('requires-port');


const opt = function (res, path, stat) {
  res.set('Access-Control-Allow-Origin', '*')
};

let app =           express();
let defalutPort =   8080;

let _path = JSON.parse(process.env.npm_config_argv).remain[0] ? JSON.parse(process.env.npm_config_argv).remain[0] : './';

console.log(`process.argv.splice`, process );

app.use( '/', express.static( _path , { setHeaders: opt }));

app.listen( defalutPort );
console.log(chalk['green'](`\n  http://127.0.0.1:${ defalutPort } / path:${ _path } \n`));
