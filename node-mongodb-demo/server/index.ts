import  express from 'express';
import db_config from './config/db_config';
import moment from 'moment';
import * as mongoose from 'mongoose';
import chalk from 'chalk';
import { selectUsers } from './controllers/selectUsers';
const notifier = require('node-notifier');

let app = express();

/**
 * @param {String} str;
 **/

let selectUserInfo = (req:any, res:any, next:any) => {
  console.log(`done`);
  next();
};

app.use('/api', selectUsers );

//列表查询

app.get('/add', (req:any, res:any)=>{

});
app.listen(3000);
