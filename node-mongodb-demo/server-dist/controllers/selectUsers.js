"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const album_1 = require("../modles/album");
const router = express_1.default.Router();
exports.selectUsers = router;
/**
 * @param { id:Number }
 */
router.get('/getByUserList', async (req, res, next) => {
    let _userId = req.query.id;
    if (_userId) {
        let data = await album_1.findByList(_userId);
        if (!data) {
            res.send({ msg: '未查询到' });
        }
        res.send(data);
    }
    else {
        res.send('<h5>the params is undefined</h5>');
    }
    next();
});
router.get('/emitByUserInfo', async (req, res, next) => {
    let { query = {} } = req;
    let data = await album_1.addAlbumInfo(query.name, query.team, query.age || 0, query.exstr || '暂无');
    console.log(data);
    res.send(data);
});
