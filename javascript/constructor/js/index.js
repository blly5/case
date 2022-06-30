/*
 * @Author: Blue 
 * @Date: 2019-07-15 16:23:38 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-04-25 14:26:51
 */

function Main() { };
let mian = new Main();
console.log(mian.constructor === Main);
// true


function Main2() { };
Main2.prototype = {};
let main2 = new Main2();
console.log(main2.constructor);

//  Object() { [native code] }
// 当prototype设置等于个对象时、由于Main2.prototype 就没有constructor属性、所以会继续沿着原型链往下找、找到Main.prototype.prototype的constructor; 它指向是Object;

function Main3() { };

Main3.prototype = {
    constructor: Main3
};

let main3 = new Main3();

console.log(main3.constructor);
console.log(Object.keys(Main3.prototype));

// Main3(){}
// ["constructor"] 可枚举


// instanceof

function Main4() { };
let main = new Main4();
console.log(main instanceof Main4);
// true

main.__proto__ = function () { };
console.log(main instanceof Main4);

// false