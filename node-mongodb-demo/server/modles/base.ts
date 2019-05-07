
import mongoose from 'mongoose';
import mongoConfig from '../config/db_config';
import chalk from 'chalk';
import moment from 'moment';
const uuid = require('uuid');

mongoose.connect(mongoConfig.url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('error',() => {
    console.log(chalk.red('链接失败'));
});

con.once('open', () => {
    console.log(chalk.blue('链接成功'));
});


////////////////////////////////////


interface findByList {
    id: Number
};

interface addAlbumInfo {
    name: String
}

//创建schema 需要转换成model document需要是复数的形式

//基础的数据模型
const schema = new mongoose.Schema({
    name: String,
    team: String,
    age: Number,
    update: Date,
    uid: String,
    exstr: String

});


//团队和成员分散

//由schema创建model实例
const albumModel = mongoose.model('activitys', schema );


export async function findByList( id:number ) {
        return albumModel.find({ 'uid':id } ,'name team age uid').lean().exec((err:any, res:any) => {
            return res;
        });
    };

export async function addAlbumInfo(name:String, team:String, age:number, exstr:String) {
        let data = {
            name: name,
            team: team,
            age: age,
            update: moment().format("YYYYMMDDHHmmss"),
            uid:uuid.v1(),
            exstr: exstr
        };
        
        return albumModel.create(data, function(err:any, res:any) {
            if (err) return { msg:'添加失败' } ;
            return res;
        })
    };

export async function setAlbumInfo(id:number, team:String, age:number, exstr:String) {
    
}
