
var express = require('express');
var schedule = require('node-schedule');

const app = express();

app.get('/', (req, res) => {
    schedule.scheduleJob('30 * * * * *', function(){
        console.log(`done`);
    });    
});

app.listen('3000');

console.log();

