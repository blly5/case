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
            if (_this.state === "pendding") {
                _this.onResolvedCallback = resolvedCallback;
                _this.onRejectedCallback = rejectedCallback;
            }
        };
        this.state = "pendding";
        this.value = null;
        this.onResolvedCallback = null;
        this.onRejectedCallback = null;
        execute(this.resolve, this.reject);
    }
    return myPromise;
}());
myPromise.all = function (promises) {
    var results = [];
    var executeCount = 0;
    return new myPromise(function (resolve, reject) {
        promises.forEach(function (promise, index) {
            promise.then(function (res) {
                results.push(res);
                executeCount++;
            }, function (res) {
                results.push(res);
            });
            var complete = promises.length === index + 1;
            if (!complete) {
                return false;
            }
            if (promises.length === executeCount) {
                resolve(results);
            }
            else {
                reject(results);
            }
        });
    });
};
var p1 = new myPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise1");
    }, 1000);
});
p1.then(function (res) { return console.log(res); }, function (res) { return console.log(res); });
var p2 = new myPromise(function (resolve, reject) { return resolve("1"); });
var p3 = new myPromise(function (resolve, reject) { return reject("2"); });
myPromise.all([p2, p3]).then(function (res) { return console.log(res); }, function (res) { return console.log(res); });
