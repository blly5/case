class myPromise {
  state: null | string;
  value: null | string;
  onResolvedCallback: null | Function;
  onRejectedCallback: null | Function;

  constructor(execute) {
    this.state = "pendding";
    this.value = null;
    this.onResolvedCallback = null;
    this.onRejectedCallback = null;
    execute(this.resolve, this.reject);
  }

  resolve = (result) => {
    this.state = "resolved";
    this.value = result;

    this.onResolvedCallback && this.onResolvedCallback(this.value);
  };
  reject = (result) => {
    this.state = "rejected";
    this.value = result;
    this.onRejectedCallback && this.onRejectedCallback(this.value);
  };

  then = (resolvedCallback, rejectedCallback) => {
    if (this.state === "resolved") {
      resolvedCallback(this.value);
    }
    if (this.state === "rejected") {
      rejectedCallback(this.value);
    }
    if (this.state === "pendding") {
      this.onResolvedCallback = resolvedCallback;
      this.onRejectedCallback = rejectedCallback;
    }
  };
}

myPromise.all = (promises) => {
  let results = [];
  let executeCount = 0;

  return new myPromise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(
        (res) => {
          results.push(res);
          executeCount++;
        },
        (res) => {
          results.push(res);
        }
      );

      let complete = promises.length === index + 1;
      if (!complete) {
        return false;
      }
      if (promises.length === executeCount) {
        resolve(results);
      } else {
        reject(results);
      }
    });
  });
};


let p1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1");
  }, 1000);
});

p1.then(
  (res) => console.log(res),
  (res) => console.log(res)
);


let p2 = new myPromise((resolve, reject) => resolve("1"));
let p3 = new myPromise((resolve, reject) => reject("2"));

myPromise.all([p2, p3]).then(
  (res) => console.log(res),
  (res) => console.log(res)
);