/*
 * @Author: Blue
 * @Date: 2019-05-29 15:25:10
 * @Last Modified by: Blue
 * @Last Modified time: 2019-11-01 16:40:34
 */

//defineProprty  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

//编辑拦截

Object.defineProperty({},{}, {
    configurable: false, //是否被删除
    enumerable: false, //是否可枚举
    writable: false, //是否可编辑
    value: undefined //默认值
})

//属性描述符
let obj = { xyz: 'hello' };

Object.defineProperties(obj, {
    age: {
        value: 18
    }
})

console.log(obj);
//{xyz: "hello", age: 18}
console.log(Object.keys(obj));
//["xyz"] 不可枚举


Object.defineProperties(obj, {
   xyz: {
        get() {
            return this.xyz
        },
        set() {
            this.xyz = 'blue'
        }
   }
})

// console.log(obj.xyz);
//gray

obj.xyz = 'pink'
// console.log(obj.xyz);







