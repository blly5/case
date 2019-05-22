

const express = require('express');
const path = require('path');

let app = express();
let defalutPort = 8081;

//////////////////

let server = app;

app.use('/s1', express.static('./javascript') );
app.use('/s2', express.static('./native-api') );

app.listen( defalutPort );

