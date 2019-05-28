/*
 * @Author: Blue
 * @Date: 2019-05-28 15:14:02
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-28 15:14:04
 */


 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//link: https://www.tslang.cn/docs/handbook/functions.html
function getColor(_a) {
    var type = _a[0], index = _a[1];
    return [type, index];
}
;
getColor(['Sky', 0]);
////////
function getColor2(types) {
    return __assign({}, types);
}
;
getColor2({ type: 'Sky', index: 2 });
////////
function getColor3(types) {
    var getType = types.type, getIndex = types.index;
}
;
getColor3({ type: 'Sky', index: 2 });
//retrunType
function getColor4(type, index) {
    return !!type;
}
;
var getColor5 = function (type, index) {
    return !!type;
};
//parameters
//必须传入参数
function getColor6(type, index) {
    return " " + type + " " + index + " ";
}
;
//可选参数 ?
function getColor7(type, index) {
    return type;
}
//默认值 = 
function getColor8(type, index) {
    if (index === void 0) { index = '5'; }
    return type + " " + index;
}
//默认参数置前 =
function getColor9(type, index) {
    if (type === void 0) { type = 'blue'; }
    return type;
}
;
getColor9(undefined, '10');
//剩余参数
function getColor10(index) {
    var type = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        type[_i - 1] = arguments[_i];
    }
    console.log(index, type);
}
//this ...
