/*
 * @Author: Blue 
 * @Date: 2020-06-29 15:35:29 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-07-01 14:36:28
 */

let Dep = null;

//收集所有依赖
function defineMonitor(obj, key, val) {
  let deps = [];
  Object.defineProperty(obj, key, {
    get() {
      if (Dep) {
        deps.push(Dep);
      }
      return val;
    },
    set(newVal) {
      val = newVal;
      deps.forEach(func => func());
    }
  })
}

//绑定依赖
function defineComputed(obj, key, func) {
  func = func.bind(obj);
  var value;
  Dep = function() {
    value = func();
  }
  value = func();
  Dep = null;
  Object.defineProperty(obj, key, {
    get() {
      return value;
    }
  })
}

let Data = {
  a: 1
};

defineMonitor(Data, 'a', 'abcd')

Data.a = 'test test';

defineComputed(Data, 'b', function() {
  console.log(this.a + 1);
})

