/*
 * @Author: Blue
 * @Date: 2019-05-23 15:45:50
 * @Last Modified by: Blue
 * @Last Modified time: 2019-09-07 16:20:33
 */

 export default class {
    constructor( el ) {
        this.el = el;
    }
     set() {
        this.el.setAttribute('contenteditable','')
     }
 };