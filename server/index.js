


const express = require('express');
const path = require('path');

let app = express();
let defalutPort = 8081;

//////////////////

let server = app;

app.use('/', express.static('./') );

app.listen( defalutPort );

