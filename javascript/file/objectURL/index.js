/*
 * @Author: Blue 
 * @Date: 2020-06-10 17:51:53 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-06-10 18:01:25
 */

 document.querySelector('input').addEventListener('change', fileChange);

 function fileChange() {
   let url = URL.createObjectURL(this.files[0]);
   document.querySelector('button').addEventListener('click', function() {
     window.open(url);
   })
 }