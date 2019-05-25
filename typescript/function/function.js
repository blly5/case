/*
 * @Author: Blue
 * @Date: 2019-05-25 17:05:32
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:05:32
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
