
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


////////////////////////////////////


//创建schema 需要转换成model document需要是复数的形式

const schema = new mongoose.Schema({
    name: String,
},{  _id: false })

const schemaList = mongoose.model('activitys', schema );

export async function findByList( id:number ) {
        try {
            let res = await schemaList.find();
            return res;
        }
        catch(e) {
            console.log(chalk.red(e));
            return { msg: 'error' };            
        }
    }

export async function addAlbumInfo(val:any) {
        let  res = await schemaList.insertMany([{'name':val}]);
        return res;
    }


