/*
 * @Author: Blue
 * @Date: 2019-05-25 17:05:45
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:05:45
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
var Colors2 = ['blue', 'green', 'white', 'pink'];
var Colors3 = ['blue'].concat(Colors2);
var Color4 = { type: 'blue', index: 5 };
var Color5 = __assign({ type: 'black' }, Color4);
console.log(Color5);
// { type: 'blue', index: 5 } !!!从左向右处理、所以 type:black 会被覆盖
