/*
 * @Author: Blue
 * @Date: 2019-05-29 15:25:10
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-29 15:25:10
 */
function getColor11() {
    var _this = this;
    this.type = 'Orange';
    this.index = 10;
    this.add = function () {
        var _this = this;
        setInterval(function () {
            _this.index++;
        }, 1000);
    };
    this.get = function () {
        console.log(this.index);
    };
    this.get2 = function () {
        console.log(_this.index);
    };
}
;
var call = function (key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (context) { return context[key].apply(context, args); };
};
//修改对象字面量name
function getColor12(key, val) {
    var _a;
    return _a = {}, _a[key] = val, _a;
}
;
//defineProprty             https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
var data = {
    key: Math.random()
};
function listen(obj) {
    for (var o in obj) {
        Object.defineProperty(obj, o, {
            get: function () {
                console.log('done');
            },
            set: function () {
                console.log("set");
            }
        });
    }
}
;
listen(data);
console.log(data.key);
console.log(data.key);
