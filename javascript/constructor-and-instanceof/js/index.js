/*
 * @Author: Blue 
 * @Date: 2019-07-15 16:23:38 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-15 18:07:25
 */

function Main(name, age) {
    this.name = name;
    this.age = age;
};

 let color1 = new Main('Blue', '123');

 console.log( color1.constructor === Main );
 //true


function Main2(){};

Main2.prototype = {};

let color2 = new Main2();

console.log(color2.constructor);

//Function() { [native code] }
//当prototype设置等于个对象时、由于Main2.prototype 就没有constructor属性、所以会继续沿着原型链往下找、找到Main.prototype.prototype的constructor; 它指向是Object;


function Main3(){};

Main3.prototype = {
    constructor: Main3
};

let color3 = new Main3();

console.log(color3.constructor);
console.log(Object.keys(Main3.prototype));

// Main3(){}
// ["constructor"] 可枚举



// instanceof

