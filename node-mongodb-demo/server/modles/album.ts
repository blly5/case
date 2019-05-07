import { albumModel } from './base';
import moment from 'moment';
const uuid = require('uuid');

interface findByList {
    id: Number
};

interface addAlbumInfo {
    name: String
}

export async function findByList( id:number ) {
    return albumModel.find({ 'uid':id } ,'name team age uid -_id', function (err:any, res:any) {
        return res;
    })
};

export async function addAlbumInfo(name:String, team:String, age:number, exstr:String) {
    let params = {
        name: name,
        team: team,
        age: age,
        update: moment().format("YYYYMMDDHHmmss"),
        uid:uuid.v1(),
        exstr: exstr
    };
    
    let data = await albumModel.create( params );

    return data;
};

export async function setAlbumInfo(id:number, team:String, age:number, exstr:String) {
    let params = {
        id: id,
        team: team,
        age: age,
        exstr: exstr
    };
}