/*
 * @Author: Blue 
 * @Date: 2019-07-10 15:06:11 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-10 15:47:37
 */

const express =         require('express');
const path =            require('path');
const chalk =           require('chalk');
const execa =           require('execa');
const process =         require('process');

let app =           express();
let defalutPort =   8080;
let _path =         !!process.argv.splice(2)[0] ? process.argv.splice(2)[0] : './';

app.use( '/', express.static( _path ) );
app.listen( defalutPort );
console.log(chalk['green'](`\n  127.0.0.1:${ defalutPort } - path:${ _path } \n`));

