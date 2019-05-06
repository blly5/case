
import mongoose from 'mongoose';
import mongoConfig from '../config/db_config';
import chalk from 'chalk';

mongoose.connect(mongoConfig.url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('error',() => {
    console.log(chalk.red('链接失败'));
});

con.once('open', () => {
    console.log(chalk.blue('链接成功'));
});

const schemaList = mongoose.model('activitys', new mongoose.Schema({
    name: String,
    hidden: String,
    }));


export async function findByList() {
        let res = await schemaList.find({});
        return res;
    }

export async function addAlbumInfo(val:any) {
        let  res = await schemaList.insertMany([{'name':val}]);
        return res;
    }


