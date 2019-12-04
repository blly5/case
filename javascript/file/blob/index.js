/*
 * @Author: Blue 
 * @Date: 2019-07-12 10:36:35 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-04 16:17:08
 */

//blob 原始数据 类文件对象 File Blob

let hey = {
   name: 'Blue',
   url: 'http://www.l1yu.com'
};

let blob = new Blob([JSON.stringify(hey)], {type: 'text/html'});
let url = URL.createObjectURL(blob);

//读取blob内容
let reader = new FileReader();
reader.readAsText(blob);
reader.addEventListener("loadend", function() {
   console.log(reader);
});

document.querySelector('.upload').addEventListener('change', function() {
   console.log(this);
   let url = URL.createObjectURL(this.files[0]);
   console.log(this.files);
   //URL.createObjectURL Blob 或者 File对象
   document.querySelector('.review').src = url;
});