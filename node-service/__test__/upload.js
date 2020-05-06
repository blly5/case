/*
 * @Author: Blue 
 * @Date: 2020-05-06 16:08:16 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-05-06 16:50:47
 */

const express = require('express');
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
let fs = require('fs');

const app = express();

app.post('/', multipartMiddleware, (req, res, next) => {
  let file = req.files.file;
  fs.readFile(file.path, function (err, data) {
    fs.writeFile(__dirname + '/' + file.name, data, err => { });
  })
})

app.listen('8081');

