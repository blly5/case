"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const moment_1 = __importDefault(require("moment"));
const uuid = require('uuid');
;
async function findByList(id) {
    return base_1.albumModel.find({ 'uid': id }, 'name team age uid -_id', function (err, res) {
        return res;
    });
}
exports.findByList = findByList;
;
async function addAlbumInfo(name, team, age, exstr) {
    let params = {
        name: name,
        team: team,
        age: age,
        update: moment_1.default().format("YYYYMMDDHHmmss"),
        uid: uuid.v1(),
        exstr: exstr
    };
    let data = await base_1.albumModel.create(params);
    return data;
}
exports.addAlbumInfo = addAlbumInfo;
;
async function setAlbumInfo(id, team, age, exstr) {
    let params = {
        id: id,
        team: team,
        age: age,
        exstr: exstr
    };
}
exports.setAlbumInfo = setAlbumInfo;
