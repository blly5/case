/*
 * @Author: Blue 
 * @Date: 2019-07-10 14:42:31 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-10 15:56:24
 */

 let worker = new Worker('./js/work1.js');

 worker.postMessage('halo');

 worker.onmessage = function( event ) {
    console.log( event );
 }


