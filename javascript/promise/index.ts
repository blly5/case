class myPromise {
  state: null | string;
  value: null | string;
  onResolvedCallback: null | Function;
  onRejectedCallback: null | Function;

  constructor(execute) {
    this.state = 'pendding';
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
    if(this.state === "resolved") {
      resolvedCallback(this.value);
    }
    if(this.state === "rejected") {
      rejectedCallback(this.value);
    }
    if(this.state === 'pendding') {
      this.onResolvedCallback = resolvedCallback;
      this.onRejectedCallback = rejectedCallback;
    }
  }
}

let p1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('333')
  }, 1000);
});
p1.then(res => console.log('1', res), res => console.log('2', res));

