/*
 * @Author: Blue
 * @Date: 2019-06-29 13:55:50
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 14:52:12
 */
//link: https://www.tslang.cn/docs/handbook/enums.html
//Number
var Colors30;
(function (Colors30) {
    Colors30[Colors30["sky"] = 0] = "sky";
    Colors30[Colors30["land"] = 1] = "land";
    Colors30[Colors30["glaxy"] = 2] = "glaxy";
})(Colors30 || (Colors30 = {}));
;
// 1 2 3 ...
function quest(des, index, type) {
    console.log("" + des, index, type);
}
;
quest('colorType:', Colors30.sky, Colors30[0]);
// colorType: 0 sky
//String
var Color31;
(function (Color31) {
    Color31["sky"] = "blue";
    Color31["land"] = "black";
    Color31["glaxy"] = "gary";
})(Color31 || (Color31 = {}));
;
//mixed
var Color32;
(function (Color32) {
    Color32["sky"] = "blue";
    Color32[Color32["land"] = 0] = "land";
    Color32[Color32["glaxy"] = 1] = "glaxy";
    Color32[Color32["spark"] = 2] = "spark";
})(Color32 || (Color32 = {}));
;
//{ '0': 'land', '1': 'glaxy', '2': 'spark', sky: 'blue', land: 0, glaxy: 1, spark: 2 }
// question
// Color32.sky = 12;
//Cannot assign to 'sky' because it is a read-only
