/*
 * @Author: Blue 
 * @Date: 2019-12-04 16:20:59 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-04 16:50:20
 */


 //相比数组ArrayBuffer放置0和1二进制数据
 //数组放在堆中,ArrayBuffer放在栈中，后者取数据更快
 
 let bf = new ArrayBuffer(8);
 //创建ArrayBuffer对象 传入字节数, ArrayBuffer没有提供读写内存方法.

 //视图
 let int8a = new Int8Array(bf);
 console.log(ArrayBuffer.isView(int8a)); // return true
 console.log(bf.byteLength); //return 300

 let aView = new Int8Array(bf, 0, 1);
 let bView = new Int8Array(bf, 1, 1);
 aView[0] = 2;
 bView[0] = 1;

 console.log(bf);