/*
 * @Author: Blue
 * @Date: 2019-06-29 13:55:50
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 14:25:18
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
