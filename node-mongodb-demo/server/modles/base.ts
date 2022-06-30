
import mongoose from 'mongoose';
import mongoConfig from '../config/db_config';
import chalk from 'chalk';
import moment from 'moment';

mongoose.connect(mongoConfig.url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('error',() => {
    console.log(chalk.red('链接失败'));
});

con.once('open', () => {
    console.log(chalk.blue('链接成功'));
});


////////////////////////////////////


//团队和成员分散
//创建schema 需要转换成model document需要是复数的形式

//子文档 test
const childSchema = new mongoose.Schema({
    setdate: Date
})

//基础的数据模型
const schema = new mongoose.Schema({
    name: String,
    team: String,
    age: Number,
    update: Date,
    uid: String,
    exstr: String,
    child: childSchema
});


//由schema创建model实例
export const albumModel = mongoose.model('activitys', schema );
