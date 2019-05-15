

const express = require('express');
const path = require('path');

let app = express();
let defalutPort = 80;

//////////////////

let server = app;

app.listen(defalutPort);

app.use('/', express.static('../javascript') );
