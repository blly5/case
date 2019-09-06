/*
 * @Author: Blue 
 * @Date: 2019-07-12 10:36:35 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-09-06 11:22:56
 */

//blob 原始数据 类文件对象

let hey = {
   name: 'Blue',
   url: 'http://www.l1yu.com'
};

let blob = new Blob([JSON.stringify(hey)], {type: 'text/html'});
let url = URL.createObjectURL(blob);


//读取blob内容
let reader = new FileReader();
reader.addEventListener("loadend", function() {
   console.log(reader);
});
reader.readAsText(blob);