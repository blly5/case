/*
 * @Author: Blue 
 * @Date: 2019-07-10 15:06:11 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-13 16:51:28
 */

const express =         require('express');
const path =            require('path');
const chalk =           require('chalk');
const execa =           require('execa');
const process =         require('process');
const opt = function (res, path, stat) {
  res.set('Access-Control-Allow-Origin', '*')
};


let app =           express();
let defalutPort =   8080;
let _path =         !!process.argv.splice(2)[0] ? process.argv.splice(2)[0] : './';

app.use( '/', express.static( _path , { setHeaders: opt }));

app.listen( defalutPort );
console.log(chalk['green'](`\n  127.0.0.1:${ defalutPort } - path:${ _path } \n`));

