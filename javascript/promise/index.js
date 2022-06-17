var myPromise = /** @class */ (function () {
    function myPromise(execute) {
        var _this = this;
        this.resolve = function (result) {
            _this.state = "resolved";
            _this.value = result;
            _this.onResolvedCallback && _this.onResolvedCallback(_this.value);
        };
        this.reject = function (result) {
            _this.state = "rejected";
            _this.value = result;
            _this.onRejectedCallback && _this.onRejectedCallback(_this.value);
        };
        this.then = function (resolvedCallback, rejectedCallback) {
            if (_this.state === "resolved") {
                resolvedCallback(_this.value);
            }
            if (_this.state === "rejected") {
                rejectedCallback(_this.value);
            }
            if (_this.state === 'pendding') {
                _this.onResolvedCallback = resolvedCallback;
                _this.onRejectedCallback = rejectedCallback;
            }
        };
        this.state = 'pendding';
        this.value = null;
        this.onResolvedCallback = null;
        this.onRejectedCallback = null;
        execute(this.resolve, this.reject);
    }
    return myPromise;
}());
var p1 = new myPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve('333');
    }, 1000);
});
p1.then(function (res) { return console.log('1', res); }, function (res) { return console.log('2', res); });
