

import mongoose from 'mongoose';
import mongoConfig from '../config/db_config';

mongoose.connect(mongoConfig.url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('error',() => {
    console.log(`链接失败`);
});

con.once('open', () => {
    console.log('链接成功');
});

const schema = new mongoose.Schema({
    name: String
});

let goods = mongoose.model('mongoTest', schema);

export const seachList = async (req:any, res:any) => {
    
    const seach = await goods.find({});

    res.send(seach);

};

