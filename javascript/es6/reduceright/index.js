/*
 * @Author: Blue
 * @Date: 2019-08-10 14:58:03
 * @Last Modified by: Blue
 * @Last Modified time: 2019-08-10 16:33:40
 */
//compose
var compose = function () {
    var fncs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fncs[_i] = arguments[_i];
    }
    return fncs.reduce(function (a, b) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return a(b.apply(void 0, args));
        };
    });
};
function compose2() {
    var args = [].slice.call(arguments);
    return function (first) {
        for (var i = 0; i > args.length; i++) {
            console.log(args[i]());
        }
    };
}
function s1(val) {
    return val + 10;
}
;
function s2(val) {
    return val * 10;
}
var add = compose2(s1, s2);
console.log(add(1));
//pipe
var pipe = function () {
    var fncs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fncs[_i] = arguments[_i];
    }
    return ;
};
