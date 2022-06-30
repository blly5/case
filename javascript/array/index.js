/*
 * @Author: Blue 
 * @Date: 2019-09-10 14:56:33 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-06-11 11:20:06
 */

let arr1 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];

console.group('map');
let arr1_res = arr1.map(item => item + '|');
console.log(arr1_res);
console.groupEnd();

let arr2 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];

console.group('filter')
let arr2_res = arr2.filter(item => item === '三年二班');
console.log(arr2_res);
console.groupEnd();

let arr3 = ['三年二班', '叶惠美', '十一月肖邦', ['倒带'], '我爱夏天', '阳光宅男'];
let arr3_1 = ['三年二班', '叶惠美', '十一月肖邦', [{
  name: '倒带'
}, {
  name: '我爱夏天'
}], [
    {
      name: '倒带',
      name: '阳光宅男'
    },
    [
      '无双'
    ]
  ]];

console.group('flat');
console.log(arr3.flat(Infinity));
console.log(arr3_1.flat(Infinity));
console.groupEnd();


let arr4 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];

console.group('every');
console.log(arr4.every(item => typeof (item) === 'string'));
console.groupEnd();


let arr5 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];
console.group('concat');
console.log(arr5.concat(['双节棍']));
console.groupEnd();

let arr6 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];
console.group('some');
console.log(arr6.some(item => item === '三年二班'));
console.groupEnd();

let arr7 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];
console.group('fill');
console.log(arr7.fill('Try', 0, Infinity));
console.groupEnd();

let arr8 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];
console.group('join');
console.log(arr8.join(' 和 '));
console.groupEnd();

let arr9 = ['三年二班', '叶惠美', ['青花瓷', ['十一月肖邦']], ['倒带'], ['我爱夏天'], ['阳光宅男']];
console.group('flatMap');
let arr9_1 = arr9.flatMap(item => item + '|');
console.log(arr9_1);
console.groupEnd();

let arr10 = [1, 312, 123, 243, 324];
console.group('reduce');
let arr10_res = arr10.reduce((val, val2, index, arr) => val + val2);
console.log(arr10_res);
console.groupEnd();

let arr11 = ['三年二班', '叶惠美', '十一月肖邦', '倒带', '我爱夏天', '阳光宅男'];

console.group('from');
let arr11 = {
  0: '叶惠美',
  1: '魔术先生',
  2: '十一月的肖邦',
  3: '我爱夏天',
  length: 2
};
console.log(arr11, Array.from(arr11));
console.groupEnd();

console.log('------special------');



function t(time, callback) {
  this.flag = false;
  if(this.flag) return;
  setTimeout(() => {
    callback();
    this.flag = true;
  }, time);
}

