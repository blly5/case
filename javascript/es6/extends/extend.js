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
var addFile = /** @class */ (function () {
    function addFile() {
        this.files = 0;
    }
    addFile.prototype.add = function () {
        this.files++;
    };
    ;
    return addFile;
}());
;
var insertFile = /** @class */ (function (_super) {
    __extends(insertFile, _super);
    function insertFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return insertFile;
}(addFile));
;
var a = new insertFile();
a.add();
console.log(a);
