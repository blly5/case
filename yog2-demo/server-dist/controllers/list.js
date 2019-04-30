"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../modles/base");
exports.seachList = async (req, res) => {
    let as = await base_1.findByList();
    let add = await base_1.addAlbumInfo(req.query.add);
    res.send(as);
};
