"use strict";
exports.__esModule = true;
var express_1 = require("express");
var selectUsers_1 = require("./controllers/selectUsers");
var notifier = require('node-notifier');
var app = express_1["default"]();
app.use('/api', selectUsers_1.selectUsers);
app.listen(3000);
