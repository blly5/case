/*
 * @Author: Blue
 * @Date: 2019-05-25 17:57:25
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-25 17:57:25
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class
var addNub = /** @class */ (function () {
    function addNub() {
        this.files = 0;
    }
    addNub.prototype.add = function () {
        this.files++;
    };
    ;
    return addNub;
}());
;
var insertFile = /** @class */ (function (_super) {
    __extends(insertFile, _super);
    function insertFile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.files = 2;
        return _this;
    }
    return insertFile;
}(addNub));
;
var a = new insertFile();
//call
function addNub2() {
    this.files = 0;
    this.add = function () {
        this.files++;
    };
}
;
function insertFile2() {
    this.files = 4;
}
;
var a2 = new insertFile2();
addNub2.call(a2);
//prototype
function addNum3() {
    this.files = 0;
    this.add = function () {
        this.files++;
    };
}
;
function insertFile3() { }
;
insertFile3.prototype = new addNum3();
var a3 = new insertFile3();
//Object.create
function addNum4() {
    this.files = 0;
    this.add = function () {
        this.files++;
        console.log(this);
    };
}
;
var a4 = Object.create(addNum4);
