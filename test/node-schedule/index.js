var express = require('express');
var schedule = require('node-schedule');
var app = express();
app.get('/', function (req, res) {
    schedule.scheduleJob('30 * * * * *', function () {
        console.log("done");
    });
});
app.listen('3000');
