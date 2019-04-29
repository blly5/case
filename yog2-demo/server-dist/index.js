"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_config_1 = require("./config/db_config");
var mongoClient = __importStar(require("mongodb"));
mongoClient.connect(db_config_1.db_config.url, { useNewUrlParser: true }, function (err, db) {
});
var app = express_1.default();
app.get('/', function (req, res) {
    res.send(db_config_1.db_config.url);
});
app.get('/add', function (req, res) {
    res.send('Hello World!2');
});
app.listen(3000);
