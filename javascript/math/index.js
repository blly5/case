/*
 * @Author: Blue 
 * @Date: 2019-12-05 14:03:17 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-05 15:07:31
 */

 //Math 不是一个构造函数
 
console.group('ceil');
console.log(1.1, Math.ceil(1.1));
//2 (大于或者等于给定数字的最小整数)
console.groupEnd('ceil')

console.group('floor');
console.log('与ceil相反', 1.1, Math.floor(1.1));
console.groupEnd('floor');

console.group('max');
console.log([10, 11, 22, 3, 4], Math.max(...[10, 11, 22, 3, 4]));
function getMaxOfArray(numArr) {
  return Math.max.apply(null, numArr);
}
console.groupEnd('max');

console.group('min');
console.log('与max相反', [10, 3, 44, 22, 2], Math.min(...[10, 3, 44, 22, 2.6]));
console.groupEnd('min');

console.group('round');
console.log(5.5, Math.round(5.5));
console.log(5.1, Math.round(5.1));
console.log(5.4, Math.round(5.4));
console.groupEnd('round');

console.group('random');
console.log('random', Math.random());
console.groupEnd('random');

console.group('pow');
console.log('2,2',Math.pow(2, 2));
console.groupEnd('pow');

console.group('abs');
console.log(-1, Math.abs(-1)) //1 
console.log(-5.5, Math.abs(-5.5)) //5.5
console.log(5.5, Math.abs(5.5)) //5.5
console.groupEnd('abs');

console.group('acos');
console.log(-1, Math.acos(-1)); //3.14....
console.groupEnd('acos');



