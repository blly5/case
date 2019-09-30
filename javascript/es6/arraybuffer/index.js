/*
 * @Author: Blue 
 * @Date: 2019-09-30 16:26:08 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-09-30 16:38:42
 */



const buf = new ArrayBuffer(32);
const dataView = new DataView(buf);
console.log(dataView.getUint8);