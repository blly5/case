import  express from 'express';
import { db_config } from './config/db_config';
import * as mongoClient from 'mongodb';

mongoClient.connect(db_config.url,{ useNewUrlParser: true }, (err, db) => {

});

var app = express()

app.get('/', function (req, res) {
    res.send(db_config.url);
    
  })

app.get('/add', (req, res)=>{
    res.send('Hello World!2')
});

app.listen(3000)