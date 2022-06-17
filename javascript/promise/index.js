var myPromise = /** @class */ (function () {
    function myPromise(execute) {
        var _this = this;
        this.state = null;
        this.value = null;
        var resolve = function (result) {
            _this.state = "resolved";
            _this.value = result;
        };
        var reject = function (result) {
            _this.state = "rejected";
            _this.value = result;
        };
        execute(resolve, reject);
    }
    myPromise.prototype.then = function (resolvedCallback, rejectedCallback) {
        this.state === "resolved" && resolvedCallback(this.value);
        this.state === "rejected" && rejectedCallback(this.value);
    };
    return myPromise;
}());
var p1 = new myPromise(function (resolve, reject) { return resolve('done'); });
p1.then(function (msg) { return console.log(msg); }, function () { });
