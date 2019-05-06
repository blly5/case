"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const base_1 = require("../modles/base");
const router = express_1.default.Router();
exports.selectUsers = router;
/**
 * @param { id:Number }
 */
router.get('/getByUserList', async (req, res, next) => {
    let _userId = req.query.id;
    if (Number(_userId)) {
        let data = await base_1.findByList(_userId);
        return res.send(data);
    }
    else {
        res.send('<h5>the params is undefined</h5>');
    }
    next();
});
/**
 * @param {id:Number, name:String}
 */
router.get('/emitByUserInfo', async (req, res, next) => {
    let { query = {} } = req;
    let _userId = query.id;
    let _name = query.name;
    if (_userId && _name) {
    }
    else {
        res.send();
    }
});
