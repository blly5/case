/*
 * @Author: Blue 
 * @Date: 2019-09-05 15:30:38 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-09-05 16:42:44
 */

 //@link: https://www.infoq.cn/article/gLxax1LYuqLDYZ-I4eKK

 function pageShare() {
  let shareData = {
    text: `三年二班`,
    url: `https://www.l1yu.com`
  };
  navigator.share(shareData);
 }

 document.querySelector('.shareBtn').addEventListener('click', pageShare);
