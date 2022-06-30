/*
 * @Author: Blue 
 * @Date: 2020-06-10 17:11:58 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-06-10 17:29:26
 */


 document.querySelector('input').addEventListener('change', fileChange);

 function fileChange() {
    let files = this.files;
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.addEventListener('load', () => {
      document.querySelector('textarea').value = reader.result;
      document.querySelector('img').src = reader.result;
    })
 }