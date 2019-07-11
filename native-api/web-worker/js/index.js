/*
 * @Author: Blue 
 * @Date: 2019-07-10 14:42:31 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-11 15:52:53
 */

 let worker = new Worker('./js/work1.js');

 worker.postMessage('halo');

 worker.onmessage = function( event ) {
    document.body.innerHTML = 'Worker1 is OK';
    worker.postMessage('close');
    document.body.innerHTML = 'Worker1 is Closed';
 };


