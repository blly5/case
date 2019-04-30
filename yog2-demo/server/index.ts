import  express from 'express';
import db_config from './config/db_config';
import moment from 'moment';
import * as mongoose from 'mongoose';
import chalk from 'chalk';

import { seachList } from './controllers/list';



let BL_Err = (str:any) => {
  console.log( chalk.red(str) + chalk.red('!') );
};

let app = express();

//列表查询
app.get('/*', seachList)

app.get('/add', (req:any, res:any)=>{

});

app.listen(3000)