/*
 * @Author: Blue 
 * @Date: 2020-07-01 10:21:33 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-07-01 15:25:53
 */

 function log(val) {
   let chlidren = document.createElement('div');
   chlidren.innerHTML = val;
   document.querySelector('#log').appendChild(chlidren);
 }

 
 document.addEventListener('copy', evnet => {
   console.log(evnet);
 })
 document.querySelector('textarea').addEventListener('paste', evnet => {
   
   let items = event.clipboardData?.items;
   if(items && items.length) {
    let content = items[items.length - 1];
    if(content.type.match('image')) {
      log(content.type);
      log(`
        <img width="100%" src="${ URL.createObjectURL(content.getAsFile()) }" />
      `)
    } else {
      log(content.type);
      content.getAsString(function(detail) {
        log(detail)
      })
    }
   }
})