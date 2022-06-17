class myPromise {
  state: null | string;
  value: null | string;

  constructor(execute) {
    this.state = null;
    this.value = null;
    let resolve = (result) => {
      this.state = "resolved";
      this.value = result;
    };
    let reject = (result) => {
      this.state = "rejected";
      this.value = result;
    };
    execute(resolve, reject);
  }
  then(resolvedCallback, rejectedCallback) {
    this.state === "resolved" && resolvedCallback(this.value);
    this.state === "rejected" && rejectedCallback(this.value);
  }
}

let p1 = new myPromise((resolve, reject) => resolve('done'));
p1.then(
  (msg) => console.log(msg), () => {}
);
